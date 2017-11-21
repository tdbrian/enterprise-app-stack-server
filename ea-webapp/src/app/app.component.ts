import { Component } from '@angular/core';
import { WebsocketClientService } from './shared/services/websocket-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private ws: WebsocketClientService) {}
}
