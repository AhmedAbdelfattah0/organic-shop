import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangageProductsComponent } from './mangage-products.component';

describe('MangageProductsComponent', () => {
  let component: MangageProductsComponent;
  let fixture: ComponentFixture<MangageProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangageProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
