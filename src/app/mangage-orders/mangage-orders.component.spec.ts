import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangageOrdersComponent } from './mangage-orders.component';

describe('MangageOrdersComponent', () => {
  let component: MangageOrdersComponent;
  let fixture: ComponentFixture<MangageOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangageOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangageOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
