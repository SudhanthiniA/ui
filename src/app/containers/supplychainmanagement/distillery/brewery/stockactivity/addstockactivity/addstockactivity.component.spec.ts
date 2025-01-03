import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockactivityComponent } from './addstockactivity.component';

describe('AddstockactivityComponent', () => {
  let component: AddstockactivityComponent;
  let fixture: ComponentFixture<AddstockactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
