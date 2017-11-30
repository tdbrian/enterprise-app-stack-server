import { Injectable } from '@angular/core';
import { WebsocketClientService } from './websocket-client.service';
import { CreateAppDto } from 'ea-shared';

@Injectable()
export class AppsService {

    constructor() { }

    addNewApp(name: string) {
        const appDto = new CreateAppDto();
    }
}
