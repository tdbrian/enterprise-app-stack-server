import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WebsocketClientService {
  static reconnectTimeout = 3000;
  esEngineWs: WebSocket;
  socketOpen = false;

  constructor() {
    this.startConnection();
  }

  sendMessage(message: string) {
    const msgString = JSON.stringify(message);
    if (this.socketOpen === true) {
      this.esEngineWs.send(msgString);
    } else {
      const err = 'Server socket connection not available.';
      console.error(err);
      throw new Error(err);
    }
  }

  private startConnection() {
    this.esEngineWs = new WebSocket('ws://localhost:9090/');
    this.esEngineWs.onopen = this.onOpen.bind(this);
    this.esEngineWs.onmessage = this.onMessage.bind(this);
    this.esEngineWs.onclose = this.onClose.bind(this);
    this.esEngineWs.onerror = this.onError.bind(this);
  }

  private onOpen(event) {
    console.log('WS: Connected');
    this.socketOpen = true;
  }

  private onMessage(event) {
    console.log('WS: Message Received');
    console.log(event.data);
  }

  private onClose(event) {
    console.log('WS: Closed');
    this.socketOpen = false;
    this.esEngineWs.close();

    const reconnectTimer = setTimeout(() => {
      if (this.socketOpen) {
        clearInterval(reconnectTimer);
      }
      console.log('WS: Attempting reconnection');
      this.startConnection();
    }, WebsocketClientService.reconnectTimeout);
  }

  private onError(event) {
    console.log('WS: Error -');
    console.log(event);
  }
}
