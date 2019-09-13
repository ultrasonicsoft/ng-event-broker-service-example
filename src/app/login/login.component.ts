import { Component, OnInit } from '@angular/core';
import { EventBrokerService } from '../event-broker/event-broker.service';
import { Events } from '../event-broker/events.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private eventService: EventBrokerService) { }

  ngOnInit() {
  }

  loginSuccessful() {
    this.eventService.publishEvent(Events.loginSuccessful);
  }

  loginFailed() {
    this.eventService.publishEvent(Events.loginFailed);
  }
}
