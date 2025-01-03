import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpassSecondinputComponent } from './transportpass-secondinput.component';

describe('TransportpassSecondinputComponent', () => {
  let component: TransportpassSecondinputComponent;
  let fixture: ComponentFixture<TransportpassSecondinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpassSecondinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpassSecondinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
