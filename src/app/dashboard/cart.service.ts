import { Injectable } from '@angular/core';
import { DashboardModule } from './dashboard.module';
import { EventBrokerService } from '../event-broker/event-broker.service';
import { Events } from '../event-broker/events.model';

@Injectable({
  providedIn: DashboardModule
})
export class CartService {
  private _cartItems = new Array<string>();

  public get cartItems(): Array<string> {
    return this._cartItems;
  }

  constructor(private eventService: EventBrokerService) {
    console.log('CartService initialized...');

    this.eventService.subscribeEvent(Events.productAdded).subscribe((productName: string) => this.onProductAdded(productName));
  }


  onProductAdded(productName: string) {
    console.log('product added event handled..');

    this._cartItems.push(productName);
    this.eventService.publishEvent(Events.cartCountUpdated, this.cartItems.length);
  }

  removeProduct(productName: string) {
    const index = this.cartItems.indexOf(productName);
    this.cartItems.splice(index, 1);
    this.eventService.publishEvent(Events.cartCountUpdated, this.cartItems.length);
  }
}
