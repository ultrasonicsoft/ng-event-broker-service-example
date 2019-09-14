import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/event-broker/events.model';
import { EventBrokerService } from 'event-broker';

@Component({
  selector: 'app-product-iphone',
  templateUrl: './product-iphone.component.html',
  styleUrls: ['./product-iphone.component.css']
})
export class ProductIphoneComponent implements OnInit {

  constructor(private eventService: EventBrokerService) { }

  ngOnInit() {
  }

  addProduct(){
    this.eventService.publishEvent(Events.productAdded, 'iPhone');
  }

}
