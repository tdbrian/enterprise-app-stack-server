import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { NavSidebarItemComponent } from './nav-sidebar/components/nav-sidebar-item/nav-sidebar-item.component';
import { Routes, RouterModule } from '@angular/router';
import { NavSidebarSectionItemComponent } from './nav-sidebar/components/nav-sidebar-section-item/nav-sidebar-section-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavSidebarComponent,
    NavSidebarItemComponent,
    NavSidebarSectionItemComponent
  ],
  exports: [
    NavSidebarComponent
  ]
})
export class LayoutModule { }
