# Angular Event Broker Service

## Introduction

In Angular application, we often require to pass data and messages between components and classes. If parent/child component hierarchy is present then we can pass data using @Input() and @Output() decorators. If not then we can create custom event service and pass events/data. 
This library exports `EventBrokerService` which is available through application level and can be injected in any declarable classes. Using `EventBrokerService` application events can flow in streamline fashion without mixing component's logic with event handling and publishing code.

## Setup

* Install library in your Angular project using command `npm install --save ng-event-broker`

* Import `EventBrokerModule` from `ng-event-broker` library

```ts
import { EventBrokerModule } from 'ng-event-broker';

@NgModule({
  declarations: [
  ],
  imports: [
    EventBrokerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* Define your application level events in separate file `events.model.ts`. For example,

```ts
export const Events = {
  loginFailed: 'loginFailed',
  loginSuccessful: 'loginSuccessful',
  logout:'logout',
  productAdded:'productAdded',
  productRemoved:'productRemoved',
  cartCountUpdated: 'cartCountUpdated'
}
```

* Register application wide events in `ngOnInit()` of `AppComponent`. Before publishing or subscribing to any events, they must be registered. As AppComponent is root component, we should define our application wide events here.

```ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private eventService: EventBrokerService) {
  }

  ngOnInit() {
    this.registerAppEvents();
  }

  private registerAppEvents() {
    this.eventService.registerEvent(Events.loginSuccessful);
    this.eventService.registerEvent(Events.logout);
    this.eventService.registerEvent(Events.productAdded);
    this.eventService.registerEvent(Events.productRemoved);
    this.eventService.registerEvent(Events.cartCountUpdated);
  }
```

* Once events are registered, we can publish and subscribe them in rest of application. For example, in below code HeaderComponent subscribe to event `cartCountUpdated`. Whenever this event is published, `onCartUpdated()` method will be called. Similarly on `Logout` button click, HeaderComponent will publish `logout` event for subscribers to handle it.

```html
<li><a href="javascript:void(0);" (click)="logout()">Logout</a></li>
```
      

```ts

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
```

## Publish event

To publish event, simply call `publishEvent(payload)` where `paylaod` can be value of type `any`. 

```ts
this.eventService.subscribeEvent(Events.cartCountUpdated).subscribe((cartCount: number) => this.onCartUpdated(cartCount))
  }
```
Make sure, event is registered first using `registerEvent()` before publishing.

## Subscribe event

To subscribe event, simply call `subscribeEvent()` function which returns `EventEmitter<any>`. You can call `subscribe()` on this event emitter and handle event.

```ts
this.eventService.subscribeEvent(Events.cartCountUpdated).subscribe((cartCount: number) => this.onCartUpdated(cartCount))
  }
```


## Clear all events

We can clear all events using `clearEvents()` function.

## Basic eShop example with EventBrokerService

You can find complete source code of very basic eShop demo application and see how events are passed and handled throughout application.

https://github.com/ultrasonicsoft/ng-event-broker-service-example


## Demo
You can play around with [Demo](http://ng-event-broker-demo.surge.sh) here.

## Contribution

Feel free to contribute to this project by raising PR in GitHub repository.