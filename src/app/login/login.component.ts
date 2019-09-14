import { Component, OnInit } from '@angular/core';
import { EventBrokerService } from 'event-broker';

import { Events } from '../event-broker/events.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private eventService: EventBrokerService) { }

  ngOnInit() {
  }

  login() {
    if (this.username == 'balram' && this.password == 'chavan') {
      this.eventService.publishEvent(Events.loginSuccessful);
    }
    else{
      this.password = '';
      alert('Incorrect username/password');
    }
  }
  
}
