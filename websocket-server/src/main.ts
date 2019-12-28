import { Context, Handler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'http';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as serverless from 'aws-serverless-express';
import * as express from 'express';
import { IoAdapter } from '@nestjs/platform-socket.io';

/*
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
*/
let cachedServer: Server;

function bootstrapServer(): Promise<Server> {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  return NestFactory.create(AppModule, adapter)
    // これを入れてみた
    .then(app => app.useWebSocketAdapter(new IoAdapter(app)))
    .then(app => app.enableCors())
    .then(app => app.init())
    .then(() => serverless.createServer(expressApp));
}

export const handler: Handler = (event: any, context: Context) => {
  console.log('event:' + event.body);
  console.log("event json: \n" + JSON.stringify(event, null, 2));
  console.log("context json: \n" + JSON.stringify(context, null, 2));
  // console.log('context:' + context);
  // const convertedEvent = eventConvert(event);
  console.log("convertedEvent \n" + JSON.stringify(event, null, 2));
  if (!cachedServer) {
    bootstrapServer().then(server => {
      cachedServer = server;
      return serverless.proxy(server, event, context);
    });
  } else {
    return serverless.proxy(cachedServer, event, context);
  }
};

/*
// 変換処理
function eventConvert(event: any): any {
  if (event.httpMethod !== null) {
    console.log('this is http')
    return event;
  }
  return {
    "path": (event.body).action,
    "httpMethod": "GET",
    "requestContext": event.requestContext,
    "body": (event.body).data
  }
}
*/
