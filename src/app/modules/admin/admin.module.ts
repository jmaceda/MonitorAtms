import { NgModule } 				from '@angular/core';
import { CommonModule } 			from '@angular/common';
import { MatToolbarModule } 		from "@angular/material";

import { AdminRoutingModule } 		from './admin-routing.module';
//import { AdminComponent } 			from './admin.component';
import { AdminComponent }           from '../../components/admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
	MatToolbarModule,
    AdminRoutingModule
  ],
  declarations: [
	AdminComponent
  ],
  exports: [
	MatToolbarModule
  ]
})
export class AdminModule { }
