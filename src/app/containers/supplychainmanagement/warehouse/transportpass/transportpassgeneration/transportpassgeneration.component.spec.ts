import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpassgenerationComponent } from './transportpassgeneration.component';

describe('TransportpassgenerationComponent', () => {
  let component: TransportpassgenerationComponent;
  let fixture: ComponentFixture<TransportpassgenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpassgenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpassgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
