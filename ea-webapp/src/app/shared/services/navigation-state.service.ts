import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavigationStateService {
  private _sidebarOpen: boolean;
  sidebarToggled$ = new Subject<boolean>();

  private _subSectionOpened: boolean;
  subSectionToggled$ = new Subject<boolean>();

  constructor() {
    this._sidebarOpen = true;
    this._subSectionOpened = false;
  }

  get sidebarOpen() {
    return this._sidebarOpen;
  }

  set sidebarOpen(value: boolean) {
    this._sidebarOpen = value;
    this.sidebarToggled$.next(value);
  }

  get subSectionOpened() {
    return this._subSectionOpened;
  }

  set subSectionOpened(value: boolean) {
    this._subSectionOpened = value;
    this.subSectionToggled$.next(value);
  }
}
