import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpasscanComponent } from './transportpasscan.component';

describe('TransportpasscanComponent', () => {
  let component: TransportpasscanComponent;
  let fixture: ComponentFixture<TransportpasscanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpasscanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpasscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
