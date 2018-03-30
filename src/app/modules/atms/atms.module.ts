import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { MatToolbarModule } 		  	    from "@angular/material";

import { NgxDatatableModule }           from '@swimlane/ngx-datatable';
import { OwlDateTimeModule } 			      from 'ng-pick-datetime';
import { OwlNativeDateTimeModule } 		  from 'ng-pick-datetime';
import { MatCardModule } 				        from '@angular/material/card';

import { AtmsRoutingModule }            from './atms-routing.module';
import { SharedModule }                 from '../shared/shared.module';

import { FiltrosUtilsService }          from '../../services/filtros-utils.service';
//import { FiltrosConsultasComponent }    from '../../components/shared/filtros-consultas/filtros-consultas.component';

import { AtmsComponent }                from '../../components/atms/atms.component';
import { JournalComponent }             from '../../components/atms/journal/journal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    SharedModule,
    AtmsRoutingModule,
    NgxDatatableModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    //FiltrosConsultasComponent
    
  ],
  declarations: [
    AtmsComponent,
    //FiltrosConsultasComponent,
    JournalComponent
  ],
  providers: [
    FiltrosUtilsService
  ],
  exports: [
  	MatToolbarModule,
  	MatCardModule,
    //FiltrosConsultasComponent,
  ]
})
export class AtmsModule { }
