import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as http from 'http';
import Logger from './utils/logger';
import * as WebSocket from 'ws';
// import incomingMessageHandler from './incoming-messages';

class Server {
  private app: express.Application;
  private dbConnection: mongoose.Connection;
  private httpServer: http.Server;
  private wsServer: WebSocket.Server;

  public static port = 9090;

  static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.config()
    this.httpServer.listen(Server.port, () => console.log(`Listening on http://localhost:${Server.port}`));
  }

  private config() {
    this.app.use(bodyParser.json());
    this.setupDatabase();
    this.setupWebSockets();

    this.app.use((req, res) => {
      const body = req.body;
      console.info('recieved!!');
      res.send({ msg: "hello", body });
    });
  }

  private setupWebSockets() {
    this.wsServer = new WebSocket.Server({ server: this.httpServer });
    this.wsServer.on('connection', (ws) => {
      Logger.info('WebSocket connection open');
      ws.on('message', (message) => Logger.info(message.toString()));
    });
  }

  private setupDatabase() {
    mongoose.connect('mongodb://localhost:38611/applicationServerStack', { useMongoClient: true });
    this.dbConnection = mongoose.connection;
    this.dbConnection.on('error', console.error.bind(console, 'connection error:'));
    this.dbConnection.once('open', () => {
      Logger.info('Database connection open');
    });
  }
}

Server.bootstrap();