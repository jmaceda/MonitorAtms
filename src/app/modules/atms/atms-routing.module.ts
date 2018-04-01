import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { AtmsComponent }          from './../../components/atms/atms.component';
import { JournalComponent }       from './../../components/atms/journal/journal.component';


const routes: Routes = [
    {
        path: 'atms', component: AtmsComponent,
          children: [
            { path: 'journal', component: JournalComponent },
        ]
    }
];

@NgModule({
  imports     : [RouterModule.forChild(routes)],
  exports     : [RouterModule],
  providers   : [],
  declarations: [
  ]
})
export class AtmsRoutingModule { }
