import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpasscancelComponent } from './transportpasscancel.component';

describe('TransportpasscancelComponent', () => {
  let component: TransportpasscancelComponent;
  let fixture: ComponentFixture<TransportpasscancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpasscancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpasscancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
