import { Component, OnInit } from '@angular/core';
import { EventBrokerService } from 'event-broker';

import { Events } from 'src/app/event-broker/events.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = new Array<string>();

  constructor(private eventService: EventBrokerService, private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cartItems;
  }

  removeItem(productName: string){
    this.cartService.removeProduct(productName);
  }
}
