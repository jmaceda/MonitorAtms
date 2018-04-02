import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';

import { BrowserAnimationsModule } 		 from '@angular/platform-browser/animations';
import { MatToolbarModule } 		  	   from "@angular/material";
import { MatCardModule } 				       from '@angular/material/card';
//import { MatSidenavModule } 		    from "@angular/material";
import { MatButtonModule } 			  	   from "@angular/material";
import { MatIconModule } 			         from "@angular/material";
import { MatSidenavModule } 		  	   from '@angular/material/sidenav';
import { FlexLayoutModule } 		  	   from "@angular/flex-layout";

import { Instance }                     from 'JsStore';
import { IDataBaseOption }              from 'JsStore';
import { ITableOption }                 from 'JsStore';
import { MDBBootstrapModule }           from 'angular-bootstrap-md';


import { OwlDateTimeModule } 			      from 'ng-pick-datetime';
import { OwlNativeDateTimeModule } 		  from 'ng-pick-datetime';
import { NgxDatatableModule }           from '@swimlane/ngx-datatable';
import { PageNotFoundComponent }        from './components/page-not-found/page-not-found.component';

import { AppRoutingModule }             from './app-routing.module';
import { InicioModule }                 from './modules/inicio/inicio.module';
import { AdminModule }                  from './modules/admin/admin.module';
import { AtmsModule }                   from './modules/atms/atms.module';
import { SharedModule }                 from './modules/shared/shared.module';

import { AppComponent }                 from './app.component';
import { HomeComponent }                from './components/home/home.component';

import { CommonService }                from './services/js-store/common.service';


declare var JsStore;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    BrowserAnimationsModule,
    MatToolbarModule,
	  MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    NgxDatatableModule,
  	OwlDateTimeModule,
  	OwlNativeDateTimeModule,

    MDBBootstrapModule.forRoot(),

    InicioModule,
    AdminModule,
    AtmsModule,
    SharedModule.forRoot(),
    AppRoutingModule,


  ],
  providers: [
    CommonService,
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    NgxDatatableModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ]
})
export class AppModule { }
