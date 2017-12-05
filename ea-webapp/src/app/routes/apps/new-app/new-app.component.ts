import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { App } from '../app.model';
import { NgForm } from '@angular/forms';

const appsUrl = '/api/v1/apps';

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html'
})
export class NewAppComponent {
  app: App;
  errorCreatingApp = false;
  isCreatingApp = false;

  constructor(private http: HttpClient) {
    this.app = { type: 'webapp' } as App;
  }

  async createApp(f: NgForm) {
    if (!f.valid) { return; }
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
