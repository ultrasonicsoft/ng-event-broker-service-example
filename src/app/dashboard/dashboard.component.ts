import { Component, OnInit } from '@angular/core';
import { EventBrokerService } from '../event-broker/event-broker.service';
import { Events } from '../event-broker/events.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cart = new Array<string>();

  constructor(private eventService: EventBrokerService) { }

  ngOnInit() {
    this.eventService.subscribeEvent(Events.productAdded).subscribe((payload: string) => this.onProductAdded(payload));
  }

  onProductAdded(productName: string) {
    this.cart.push(productName);
  }

  removeProduct(productName: string) {
    this.eventService.publishEvent(Events.productRemoved, productName);
  }

}
