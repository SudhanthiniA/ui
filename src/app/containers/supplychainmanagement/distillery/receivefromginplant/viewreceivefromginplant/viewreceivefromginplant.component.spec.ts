import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreceivefromginplantComponent } from './viewreceivefromginplant.component';

describe('ViewreceivefromginplantComponent', () => {
  let component: ViewreceivefromginplantComponent;
  let fixture: ComponentFixture<ViewreceivefromginplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreceivefromginplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreceivefromginplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
