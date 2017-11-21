import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { RouterEvent } from '@angular/router/src/events';

@Component({
  selector: 'app-nav-sidebar-section-item',
  templateUrl: './nav-sidebar-section-item.component.html',
  styleUrls: ['./nav-sidebar-section-item.component.scss']
})
export class NavSidebarSectionItemComponent implements OnInit {
  @Input() routeMatcher: string;

  show: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.show = false;

    // Show or hide component based on route active state
    this.router.events.subscribe(evt => {
      this.show = (event instanceof NavigationStart && this.router.isActive(this.routeMatcher, false));
    });
  }

}

