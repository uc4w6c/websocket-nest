import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'ss-test-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.scss']
})
export class WebsocketComponent implements OnInit, OnDestroy {
  connection;
  message;

  constructor(private websocketService: WebsocketService) {}

  onClick(){
    this.websocketService.emit('broadcast', 'Hello!');
    console.log('click start');
    console.log('click end');
  }

  ngOnInit() {
    this.websocketService.connect();
    this.connection = this.websocketService.on('broadcast').subscribe(data => {
      console.log(data);
      this.message = data;
    })
    // this.websocketService.emit('message', 'Hello!!');
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
