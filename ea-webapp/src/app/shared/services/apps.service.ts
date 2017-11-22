import { Injectable } from '@angular/core';
import { WebsocketClientService } from './websocket-client.service';
import { CreateAppDto, ApplicationType } from 'ea-shared';

@Injectable()
export class AppsService {

    constructor(private server: WebsocketClientService) { }

    addNewApp(name: string, appType: ApplicationType) {
        const appDto = new CreateAppDto(name, appType);
        this.server.sendMessage(appDto);
    }
}
