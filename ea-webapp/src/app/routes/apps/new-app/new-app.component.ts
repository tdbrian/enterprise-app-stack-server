import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { App } from '../app.model';

const appsUrl = '/api/v1/apps';

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.scss']
})
export class NewAppComponent {
  app: App;
  errorCreatingApp = false;
  isCreatingApp = false;

  constructor(private http: HttpClient) {
    this.app = {} as App;
  }

  async createApp() {
    try {
      this.isCreatingApp = true;
      this.errorCreatingApp = false;
      await this.http.post<App[]>(appsUrl, this.app).toPromise();
    } catch (error) {
      this.errorCreatingApp = true;
    } finally {
      this.isCreatingApp = false;
    }
  }
}
