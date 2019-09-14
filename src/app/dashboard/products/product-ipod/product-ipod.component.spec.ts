import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIpodComponent } from './product-ipod.component';

describe('ProductIpodComponent', () => {
  let component: ProductIpodComponent;
  let fixture: ComponentFixture<ProductIpodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductIpodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIpodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
