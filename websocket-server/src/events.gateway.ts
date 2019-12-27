import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  MessageBody
} from '@nestjs/websockets';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway(3001)
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  // handleMessage(client: any, payload: any): WsResponse<string> {
  handleMessage(@MessageBody() data: any): WsResponse<string> {
    console.log('message start');
    // return { event: 'message', data: 'Hello World' };
    return { event: 'message', data: data };
  }

  /*
  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    console.log('events start')
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity( data: number): Promise<number> {
    console.log('identity start')
    return data;
  }
  */

}
