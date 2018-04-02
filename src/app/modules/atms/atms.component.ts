import { Component, OnInit }    from '@angular/core';

import { InfoAtmsService }      from '../../services/info-atms.service';
import { AtmsService }          from '../../services/js-store/atms.service';
import { Atm, IAtm }            from '../../models/atm';

@Component({
  selector   : 'app-atms',
  templateUrl: './atms.component.html',
  styleUrls  : ['./atms.component.css'],
  providers: [AtmsService]
})
export class AtmsInitComponent implements OnInit {
  private _atms: Array<AtmsService>;
  private _atmsService: AtmsService;
  private _detalleAtmsService: InfoAtmsService;
  private infoATMs:any;


  constructor(_atmsService: AtmsService,
              _detalleAtmsService: InfoAtmsService) {
    console.log("AtmsInitComponent.constructor:: Inicio");
    this._atmsService = _atmsService;

  }

  ngOnInit() {
    this.infoATMs = this._detalleAtmsService.obtenGetAtm();

    this.infoATMs.forEach( reg => {
      this._atmsService.addAtms(reg);
    });
    console.log("AtmsInitComponent.ngOnInit:: -->" + this.infoATMs + "<--");
  }


}
