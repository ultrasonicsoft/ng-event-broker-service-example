import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIpadComponent } from './product-ipad.component';

describe('ProductIpadComponent', () => {
  let component: ProductIpadComponent;
  let fixture: ComponentFixture<ProductIpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductIpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
