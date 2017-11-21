import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppsListComponent } from './apps-list/apps-list.component';
import { NewAppComponent } from './new-app/new-app.component';

const routes: Routes = [
  { path: 'list', component: AppsListComponent },
  { path: 'new', component: NewAppComponent },
  { path: 'apps', redirectTo: '/apps/list', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AppsListComponent,
    NewAppComponent
  ]
})
export class AppsModule { }
