import { Component } 			from "@angular/core";
import { OnInit } 				from "@angular/core";
import { Input}                             from '@angular/core';
import * as moment 				from "moment";

import { MatToolbarModule } 		  from "@angular/material";
//import { MatSidenavModule } 		from "@angular/material";
import { MatButtonModule } 			  from "@angular/material";
import { MatIconModule } 			    from "@angular/material";
import { MatSidenavModule } 		  from '@angular/material/sidenav';
import { FlexLayoutModule } 		  from "@angular/flex-layout";

@Component({
  selector   : "cf-home",
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.css']
})
export class HomeComponent implements OnInit {
  now      = moment().format();
  tomorrow = moment()
    .add(1, "days")
    .format();
	
  constructor() {
    console.log("HomeComponent.constructor:: inicio");
  }

  ngOnInit() {
	  console.log("HomeComponent.ngOnInit:: inicio");
  }
}
