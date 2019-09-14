
import { Component } from '@angular/core';
import { EventBrokerService } from 'event-broker';

import { Events } from './event-broker/events.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-event-broker-example';
  cart: Array<string> = new Array<string>();

  constructor(private eventService: EventBrokerService, private router: Router) {
  }

  ngOnInit() {
    this.registerAppEvents();

    this.eventService.subscribeEvent(Events.loginSuccessful).subscribe((payload) => this.onLogin(payload))
    this.eventService.subscribeEvent(Events.logout).subscribe(() => this.onLogout())
  }

  private registerAppEvents() {
    this.eventService.registerEvent(Events.loginSuccessful);
    this.eventService.registerEvent(Events.logout);
    this.eventService.registerEvent(Events.productAdded);
    this.eventService.registerEvent(Events.productRemoved);
    this.eventService.registerEvent(Events.cartCountUpdated);
  }

  onLogin(payload: any) {
    localStorage.setItem('username', payload);
    localStorage.setItem('jwtToken', 'some-token');
    this.router.navigateByUrl('/dashboard');
  }

  onLogout() {
    this.eventService.clearEvents();

    localStorage.removeItem('username');
    localStorage.removeItem('jwtToken');
    this.router.navigateByUrl('/login');
  }
}
