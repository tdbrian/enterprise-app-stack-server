import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { App } from '../app.model';

const appsUrl = '/api/v1/apps';

@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html'
})
export class AppsListComponent implements OnInit {
  apps: App[];
  errorLoadingApps = false;
  isLoadingApps = false;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    try {
      this.isLoadingApps = true;
      this.errorLoadingApps = false;
      this.apps = await this.http.get<App[]>(appsUrl).toPromise();
    } catch (error) {
      this.errorLoadingApps = true;
    } finally {
      this.isLoadingApps = false;
    }
  }
}
