import { Component, OnInit }              from '@angular/core';

import { FiltrosUtilsService }            from '../../services/filtros-utils.service';
import { FiltrosConsultasComponent }      from '../shared/filtros-consultas/filtros-consultas.component';

@Component({
  selector   : 'app-atms',
  templateUrl: './atms.component.html',
  styleUrls  : ['./atms.component.css']
})
export class AtmsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
