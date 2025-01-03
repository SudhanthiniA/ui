import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportstransportpassComponent } from './reportstransportpass.component';

describe('ReportstransportpassComponent', () => {
  let component: ReportstransportpassComponent;
  let fixture: ComponentFixture<ReportstransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportstransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportstransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
