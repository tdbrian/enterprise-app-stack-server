import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStateService } from './services/navigation-state.service';
import { WebsocketClientService } from './services/websocket-client.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    NavigationStateService,
    WebsocketClientService
  ],
  exports: []
})
export class SharedModule { }
