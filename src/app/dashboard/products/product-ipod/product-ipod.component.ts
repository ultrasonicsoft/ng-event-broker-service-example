import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/event-broker/events.model';
import { EventBrokerService } from 'ng-event-broker';

@Component({
  selector: 'app-product-ipod',
  templateUrl: './product-ipod.component.html',
  styleUrls: ['./product-ipod.component.css']
})
export class ProductIpodComponent implements OnInit {

  constructor(private eventService: EventBrokerService) { }

  ngOnInit() {
  }

  addProduct(){
    this.eventService.publishEvent(Events.productAdded, 'iPod');
  }

}
