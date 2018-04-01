import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './../../components/admin/admin.component';
import { AdminNewComponent } from './../../components/admin-new/admin-new.component';
import { AdminEditComponent } from './../../components/admin-edit/admin-edit.component';
import { AdminViewComponent } from './../../components/admin-view/admin-view.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent,
            children: [
                { path: 'new', component: AdminNewComponent },
                { path: 'edit/:id', component: AdminEditComponent },
                { path: 'view', component: AdminViewComponent }
            ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: [
	  AdminNewComponent,
	  AdminEditComponent,
	  AdminViewComponent
  ]
})
export class AdminRoutingModule { }
