
import { Component } from '@angular/core';
import { EventBrokerService } from './event-broker/event-broker.service';
import { Events } from './event-broker/events.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-event-broker-example';

  constructor(private eventService: EventBrokerService, private router: Router) {
  }

  ngOnInit() {
    this.registerAppEvents();

    this.eventService.subscribeEvent(Events.loginSuccessful).subscribe(() => this.onLogin())
  }

  private registerAppEvents() {
    this.eventService.registerEvent(Events.loginSuccessful);
  }

  onLogin() {
    console.log('event received in AppComponent');

    this.router.navigateByUrl('/dashboard');

  }
}
