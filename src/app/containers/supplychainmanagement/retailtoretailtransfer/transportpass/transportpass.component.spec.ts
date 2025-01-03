import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpassComponent } from './transportpass.component';

describe('TransportpassComponent', () => {
  let component: TransportpassComponent;
  let fixture: ComponentFixture<TransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
