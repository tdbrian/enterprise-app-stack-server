import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppsListComponent,
    NewAppComponent
  ]
})
export class AppsModule { }
