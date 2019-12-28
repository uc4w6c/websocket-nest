import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  MessageBody,
  ConnectedSocket
} from '@nestjs/websockets';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  // handleMessage(client: any, payload: any): WsResponse<string> {
  handleMessage(@MessageBody() data: any): WsResponse<string> {
  // handleMessage(@ConnectedSocket() client, @MessageBody() data: any): void {
    console.log('message start');
    // this.server.emit('response', 'response')
    return { event: 'response', data: data };
  }

  @SubscribeMessage('broadcast')
  broadcast(@MessageBody() data: any): any {
    console.log('broadcast start');
    // this.server.emit('broadcast', 'response')
    return { statusCode: 200, body: 'websocket test'};
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
