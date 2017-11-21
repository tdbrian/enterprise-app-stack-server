import SocketMessage from "./utils/socket-message";
import Logger from "./utils/logger";
import { Request } from "express";
import * as WebSocket from 'ws';

export default function incomingMessageHandler(message: SocketMessage, ws: WebSocket, req: Request) {
    switch (message.type) {
        // case 'apps:create': return createApp(ws, req, message);
        default: return Logger.error(`No handler found for message type: ${message.type}`)
    }
}