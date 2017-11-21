import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthModule, OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AppsModule } from './routes/apps/apps.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BusinessComponent } from './routes/business/business.component';
import { IntegrationsComponent } from './routes/integrations/integrations.component';
import { AnalyticsComponent } from './routes/analytics/analytics.component';
import { MonitoringComponent } from './routes/monitoring/monitoring.component';
import { AccountComponent } from './routes/account/account.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { QualityAssuranceComponent } from './routes/quality-assurance/quality-assurance.component';
import { UsersComponent } from './routes/users/users.component';
import { ServicesComponent } from './routes/services/services.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';

const config = {
  issuer: 'https://dev-627580.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oacvrqdy7TlmhDaR0h7'
};

const routes: Routes = [
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [OktaAuthGuard] },
  { path: 'apps', loadChildren: 'app/routes/apps/apps.module#AppsModule', canActivate: [OktaAuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [OktaAuthGuard] },
  { path: 'business', component: BusinessComponent, canActivate: [OktaAuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [OktaAuthGuard] },
  { path: 'quality-assurance', component: QualityAssuranceComponent, canActivate: [OktaAuthGuard] },
  { path: 'monitoring', component: MonitoringComponent, canActivate: [OktaAuthGuard] },
  { path: 'analytics', component: AnalyticsComponent, canActivate: [OktaAuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [OktaAuthGuard] },
  { path: 'account', component: AccountComponent, canActivate: [OktaAuthGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BusinessComponent,
    IntegrationsComponent,
    AnalyticsComponent,
    MonitoringComponent,
    AccountComponent,
    SettingsComponent,
    QualityAssuranceComponent,
    UsersComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routes),
    OktaAuthModule.initAuth(config),
    SharedModule,
    LayoutModule,
    AppsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
