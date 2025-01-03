import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutytransportpasswiseComponent } from './dutytransportpasswise.component';

describe('DutytransportpasswiseComponent', () => {
  let component: DutytransportpasswiseComponent;
  let fixture: ComponentFixture<DutytransportpasswiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutytransportpasswiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutytransportpasswiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
