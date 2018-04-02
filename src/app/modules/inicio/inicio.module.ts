import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } 		  	    from "@angular/material";
import { MatCardModule } 				        from '@angular/material/card';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from '../../components/inicio/inicio.component';

@NgModule({
  imports: [
    CommonModule,

    MatToolbarModule,
    //MatCardModule,

    InicioRoutingModule
  ],
  declarations: [
    InicioComponent
  ],
  providers: [
    //FiltrosUtilsService
  ],
  exports: [
    MatToolbarModule,
    //MatCardModule,
    //FiltrosConsultasComponent,
  ]
})
export class InicioModule { }
