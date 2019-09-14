import { Component, OnInit } from '@angular/core';
import { EventBrokerService } from 'event-broker';

import { Events } from 'src/app/event-broker/events.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItemCount = 0;

  constructor(private eventService: EventBrokerService) { }

  ngOnInit() {
    this.eventService.subscribeEvent(Events.cartCountUpdated).subscribe((cartCount: number) => this.onCartUpdated(cartCount))
  }

  onCartUpdated(cartCount: number) {
    this.cartItemCount = cartCount;
  }
  logout() {
    this.eventService.publishEvent(Events.logout);
  }

}
