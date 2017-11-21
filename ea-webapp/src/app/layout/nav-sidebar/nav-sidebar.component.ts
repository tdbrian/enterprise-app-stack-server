import { Component, OnInit } from '@angular/core';
import { NavigationStateService } from '../../shared/services/navigation-state.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {
  currentUrl: string;

  constructor(public nav: NavigationStateService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(this.onRouteChanged.bind(this));
  }

  sectionIsSelected(section: string) {
    return this.currentUrl.indexOf(section) > -1;
  }

  private onRouteChanged(event) {
    if (event instanceof NavigationStart) {
      this.currentUrl = event.url;
      if (event.url.indexOf('/dashboard') === 0) {
        this.nav.subSectionOpened = false;
      } else {
        this.nav.subSectionOpened = true;
      }
    }
  }

}
