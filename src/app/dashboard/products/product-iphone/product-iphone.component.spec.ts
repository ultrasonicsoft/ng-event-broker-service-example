import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIphoneComponent } from './product-iphone.component';

describe('ProductIphoneComponent', () => {
  let component: ProductIphoneComponent;
  let fixture: ComponentFixture<ProductIphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductIphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
