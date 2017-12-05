import { Component, OnInit } from '@angular/core';
import { App } from '../app.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';

const appsUrl = '/api/v1/apps';

@Component({
  selector: 'app-settings-app',
  templateUrl: './settings-app.component.html'
})
export class SettingsAppComponent implements OnInit {
  appId: string;
  app: App;
  isLoadingApp = false;
  isSavingApp = false;
  errorSavingApp = false;
  errorGettingApp = false;

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {
    this.app = {} as App;
  }

  async ngOnInit() {
    this.isLoadingApp = true;
    this.getApp();

    this.activeRoute.params.subscribe(params => {
      this.appId = params['appId'];
      this.getApp();
    });
  }

  async saveApp(f: NgForm) {
    if (!f.valid) { return; }
    try {
      this.isSavingApp = true;
      this.errorSavingApp = false;
      await this.http.patch<App[]>(appsUrl, this.app).toPromise();
    } catch (error) {
      this.errorSavingApp = true;
    } finally {
      this.isSavingApp = false;
    }
  }

  private async getApp(): Promise<void> {
    try {
      this.isLoadingApp = true;
      this.errorGettingApp = false;
      this.app = await this.http.get<App>(`${appsUrl}/${this.activeRoute.snapshot.params['appId']}`).toPromise();
    } catch (error) {
      this.errorGettingApp = true;
    } finally {
      this.isLoadingApp = false;
    }
  }

}
