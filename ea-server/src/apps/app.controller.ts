import { Request } from "express";
import * as WebSocket from 'ws';
import SocketMessage from "../utils/socket-message";

class CreateAppMsg extends SocketMessage {
    name: string;
    description: string;
}

export function createApp(message: CreateAppMsg, ws: WebSocket.Server, req: Request) {

    // ws.send();
}