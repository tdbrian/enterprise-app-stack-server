import { Component, OnInit, Input } from '@angular/core';
import { NavigationStateService } from '../../../../shared/services/navigation-state.service';

@Component({
  selector: 'app-nav-sidebar-item',
  templateUrl: './nav-sidebar-item.component.html',
  styleUrls: ['./nav-sidebar-item.component.scss']
})
export class NavSidebarItemComponent implements OnInit {
  @Input() icon: string;
  @Input() label: string;
  @Input() link: string[];

  showBackground: boolean;

  constructor(public nav: NavigationStateService) { }

  ngOnInit() {
    this.nav.subSectionToggled$.subscribe(open => this.showBackground = open);
  }
}
