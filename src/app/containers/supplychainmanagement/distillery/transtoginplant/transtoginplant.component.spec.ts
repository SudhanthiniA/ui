import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstoginplantComponent } from './transtoginplant.component';

describe('TranstoginplantComponent', () => {
  let component: TranstoginplantComponent;
  let fixture: ComponentFixture<TranstoginplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranstoginplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranstoginplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
