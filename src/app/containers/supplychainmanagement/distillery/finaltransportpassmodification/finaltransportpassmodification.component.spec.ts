import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaltransportpassmodificationComponent } from './finaltransportpassmodification.component';

describe('FinaltransportpassmodificationComponent', () => {
  let component: FinaltransportpassmodificationComponent;
  let fixture: ComponentFixture<FinaltransportpassmodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinaltransportpassmodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaltransportpassmodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
