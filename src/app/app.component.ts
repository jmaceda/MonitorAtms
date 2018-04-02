import { Component }            from '@angular/core';

import { SoapService }          from './services/soap.service';

import { InfoAtmsService }      from './services/info-atms.service';
import { AtmsService }          from './services/js-store/atms.service';
import { Atm, IAtm }            from './models/atm';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AtmsService, InfoAtmsService, SoapService]
})
export class AppComponent {
  title = 'app works!';

  //public _detalleAtmsService: InfoAtmsService;

  private _atms: Array<AtmsService>;
  //private _atmsService: AtmsService;
  private infoATMs:any;

  constructor(public _atmsService: AtmsService,
              public _detalleAtmsService: InfoAtmsService) {
    console.log("AtmsInitComponent.constructor:: Inicio");
    //this._atmsService = _atmsService;

  }

  ngOnInit() {
    this.infoATMs = this._detalleAtmsService.obtenGetAtmAsync();

    /*
    this._detalleAtmsService.obtenGetAtm( reg => {
      this._atmsService.addAtms(reg);
    });
    */

    /*
    this.infoATMs.forEach( reg => {
      this._atmsService.addAtms(reg);
    });
    */
    console.log("AtmsInitComponent.ngOnInit:: -->" + this.infoATMs + "<--");
  }

}
