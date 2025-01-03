import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreceivefromginplantComponent } from './addreceivefromginplant.component';

describe('AddreceivefromginplantComponent', () => {
  let component: AddreceivefromginplantComponent;
  let fixture: ComponentFixture<AddreceivefromginplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreceivefromginplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreceivefromginplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
