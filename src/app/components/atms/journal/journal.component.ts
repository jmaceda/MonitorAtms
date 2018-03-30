import { Component }                            from '@angular/core';

import { NgxDatatableModule }                   from '@swimlane/ngx-datatable';
import { sprintf }                              from "sprintf-js";
import * as $                                   from 'jquery';

import { SoapService }                          from '../../../services/soap.service';
import { FiltrosUtilsService }                  from '../../../services/filtros-utils.service';
import { FiltrosConsultasComponent }            from '../../shared/filtros-consultas/filtros-consultas.component';
import { DatosJournalService }                  from '../../../services/datos-journal.service';
import { BACKSPACE } from "@angular/cdk/keycodes";


var arrDatosJournal:any[] = [];

export var datosATMs = [];
export var gPaginasJournal: any;
export var gDatosJournal  : any;


export const nomComponente: string = "JournalComponent";
export var gDatosAtms     : any[];

var arrDatosAtmsX:any[] = [];


@Component({
  selector : 'app-journal',
  styleUrls: [
    './journal.component.css',
  ],
  templateUrl: 'journal.component.html',
  providers  : [
    SoapService,
    DatosJournalService
  ]
})
export class JournalComponent {

  // Parametros para la pantalla de filtros para la consulta
  public dListaAtmGpos:any       = [];
  public dTipoListaParams:string = "A";
  public dSolicitaFechasIni      = true;
  public dSolicitaFechasFin      = true;
  public dUltimaActualizacion:any;

  public nomArchExcel = "Journal_";
  public columnas: any;
  public dataJournalRedBlu      = [];
  private isDatosJournal:boolean = false;

  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  constructor(public _soapService: SoapService,
              public filtrosUtilsService: FiltrosUtilsService,
              public datosJournalService: DatosJournalService){
  }

  ngOnInit() {
    if ( $('#btnExpExel').length == 0) {
      $('.data-table-header').append('<input id="btnExpExel" type=image src="assets/img/office_excel.png" width="40" height="35" (click)="exportaJournal2Excel()">');
    }

    $('#btnExpExel').css('cursor', 'not-allowed');
    this.isDatosJournal = true;
    this.columnas       = this.datosJournalService.obtenColumnasVista();
  }

  public parametrosConsulta(filtrosConsulta){

    let parametrosConsulta:any = {};
    let fIniParam              = filtrosConsulta.fchInicio;
    let fFinParam              = filtrosConsulta.fchFin;
    let fchIniParam:string     = sprintf("%04d-%02d-%02d-%02d-%02d", fIniParam.year, fIniParam.month, fIniParam.day,
        fIniParam.hour, fIniParam.min);
    let fchFinParam:string      = sprintf("%04d-%02d-%02d-%02d-%02d", fFinParam.year, fFinParam.month, fFinParam.day,
        fFinParam.hour, fFinParam.min);
    let filtrosCons:any = {timeStampStart: fchIniParam, timeStampEnd: fchFinParam, ipAtm: filtrosConsulta.atm};

    this.pDatosDelJournal(filtrosCons);
  }

  public pDatosDelJournal(filtrosCons){

    let paramsCons: any = {
      ip: [filtrosCons.ipAtm], timeStampStart: filtrosCons.timeStampStart, timeStampEnd: filtrosCons.timeStampEnd,
      events: -1, minAmount: -1, maxAmount: -1, authId: -1, cardNumber: -1, accountId: -1
    };

    paramsCons = {accountId:-1, authId: -1, cardNumber: -1, events: -1, ip: ["11.40.2.8"], maxAmount: -1, minAmount: -1, timeStampEnd: "2018-03-24-23-59", timeStampStart: "2018-03-24-00-00"};
    
    this.dataJournalRedBlu = [];

    // *** Llama al servicio remoto para obtener el numero de paginas a consultar.
    this._soapService.post("", "GetEjaLogDataLength", paramsCons, this.GetEjaLogDataLength, false);

    if (gPaginasJournal.TotalPages > 0) {
      let datosJournal: any = [];
      for (let idx = 0; idx < gPaginasJournal.TotalPages; idx++) {
        paramsCons.page = idx;
        this._soapService.post("", "GetEjaLogPage", paramsCons, this.GetEjaLogPage, false);
        this.dataJournalRedBlu = this.dataJournalRedBlu.concat(gDatosJournal);
//console.log(JSON.stringify(this.dataJournalRedBlu));
        this.dataJournalRedBlu.forEach( (reg) => {
          this.selected = [reg[2]];
        })
      }
    }

    if (this.dataJournalRedBlu.length > 0) {
      $('#btnExpExel').css('cursor', 'pointer');
      this.isDatosJournal = false;
    }else{
      $('#btnExpExel').css('cursor', 'not-allowed');
      this.isDatosJournal = true;
    }

    this.filtrosUtilsService.fchaHraUltimaActualizacion();
  }

  public GetEjaLogDataLength(paginasJournal:any, status){
    gPaginasJournal = paginasJournal;
    console.log(nomComponente+".GetEjaLogDataLength:: ["+JSON.stringify(gPaginasJournal)+"]");
  }

  public GetEjaLogPage(datosJournal:any, status){
    gDatosJournal = datosJournal;
  }

  public exportaJournal2Excel(event){
    console.log(nomComponente+".exportaJournal2Excel:: Inicio");
    this.datosJournalService.exportaJournal2Excel(this.dataJournalRedBlu);
  }

  /* Recupera la información del retistro en el que se dio Click */
  onSelect({ selected }) {
    //console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    //console.log('Activate Event', event);
  }

  messages(){
    return({emptyMessage: '', totalMessage: 'total'});
  }

  getCellClass({ row, column, value }) {
    //return value > 10 ? "color:red" : "color:green";
  }
  
  getRowClass(row) {

    return({
      'retiroOk': validaDatosParaColorRenglon('retiroOk', row),
      'consultaOk': validaDatosParaColorRenglon('consultaOk', row),
      'errorConex': validaDatosParaColorRenglon('errorConex', row),
    });
  }
}


/* Esta debe de ser una función y no un metodo */
function validaDatosParaColorRenglon(cve, row){
  switch(cve){
    case 'retiroOk': 
      if(row.Data === "Withdrawal DispenseOk"){
        return(true);
      }
      break;
    
    case 'consultaOk': 
      if(row.Data === "Approved transaction" && row.Event === "BalanceCheck"){
        return(true);
      }
      break;
      
    case 'errorConex': 
      if(row.SwitchResponseCode > 999 && (row.HWErrorCode === "Problemas de comunicación" || row.HWErrorCode === "Tiempo expirado")){
        return(true);
      }
      break;       
  }
  return(false);
}