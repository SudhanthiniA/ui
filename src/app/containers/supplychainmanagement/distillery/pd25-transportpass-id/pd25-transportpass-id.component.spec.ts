import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd25TransportpassIdComponent } from './pd25-transportpass-id.component';

describe('Pd25TransportpassIdComponent', () => {
  let component: Pd25TransportpassIdComponent;
  let fixture: ComponentFixture<Pd25TransportpassIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd25TransportpassIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd25TransportpassIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
