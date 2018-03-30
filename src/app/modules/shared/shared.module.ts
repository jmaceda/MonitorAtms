import { NgModule }                     from '@angular/core';
import { ModuleWithProviders  }         from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';

import { MatCardModule }                from '@angular/material/card';
import { OwlDateTimeModule }            from 'ng-pick-datetime';
import { OwlNativeDateTimeModule }      from 'ng-pick-datetime';

import { FiltrosConsultasComponent }    from '../../components/shared/filtros-consultas/filtros-consultas.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    MatCardModule,  
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  declarations: [
    FiltrosConsultasComponent
  ],
  providers: [
  ],
  exports: [
    FiltrosConsultasComponent,
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ]
    }
  }
}
