import * as bodyParser from 'body-parser';
import express from "express";

//import * as controllers from './controllers';
/*import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';*/
import logger from "morgan";


class ExampleServer/* extends Server */{

    private readonly SERVER_STARTED = 'Example server started on port: ';
    app: any;
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(logger('dev'));
        //this.setupControllers();
    }

    public addRoutes(baseUrl: string, routes: express.Router){
        this.app.use(baseUrl, routes);
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(this.SERVER_STARTED + port)
        });
    }
}

export default ExampleServer;
