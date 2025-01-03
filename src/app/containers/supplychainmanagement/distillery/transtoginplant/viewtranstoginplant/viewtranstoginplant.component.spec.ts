import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtranstoginplantComponent } from './viewtranstoginplant.component';

describe('ViewtranstoginplantComponent', () => {
  let component: ViewtranstoginplantComponent;
  let fixture: ComponentFixture<ViewtranstoginplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtranstoginplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtranstoginplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
