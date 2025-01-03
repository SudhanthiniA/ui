import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaltransportpassComponent } from './finaltransportpass.component';

describe('FinaltransportpassComponent', () => {
  let component: FinaltransportpassComponent;
  let fixture: ComponentFixture<FinaltransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinaltransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaltransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
