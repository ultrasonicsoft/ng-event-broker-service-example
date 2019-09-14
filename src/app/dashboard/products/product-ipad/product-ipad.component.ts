import { Component, OnInit } from '@angular/core';
import { EventBrokerService } from 'ng-event-broker';

import { Events } from 'src/app/event-broker/events.model';

@Component({
  selector: 'app-product-ipad',
  templateUrl: './product-ipad.component.html',
  styleUrls: ['./product-ipad.component.css']
})
export class ProductIpadComponent implements OnInit {

  constructor(private eventService: EventBrokerService) { }

  ngOnInit() {
  }

  addProduct(){
    this.eventService.publishEvent(Events.productAdded, 'iPad');
  }

}
