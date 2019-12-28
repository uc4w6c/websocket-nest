import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  // private url     = 'http://localhost:3001';
  private url     = 'wss://tka08ocjra.execute-api.ap-northeast-1.amazonaws.com/dev';
  private socket;

  connect() {
    this.socket = webSocket(this.url);
   }
  
  emit(emitName: string, data?) {
    // this.socket.emit(emitName, data);
    this.socket.next(emitName, data);
  }
  
  on(onName: string) {
    let observable = new Observable(observer => {
      this.socket.on(onName, (data) => {
        observer.next(data);
      });
  
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }
}
