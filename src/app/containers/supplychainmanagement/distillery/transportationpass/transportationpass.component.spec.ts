import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationpassComponent } from './transportationpass.component';

describe('TransportationpassComponent', () => {
  let component: TransportationpassComponent;
  let fixture: ComponentFixture<TransportationpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
