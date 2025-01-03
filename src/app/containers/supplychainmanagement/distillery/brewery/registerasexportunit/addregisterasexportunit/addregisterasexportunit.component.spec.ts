import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregisterasexportunitComponent } from './addregisterasexportunit.component';

describe('AddregisterasexportunitComponent', () => {
  let component: AddregisterasexportunitComponent;
  let fixture: ComponentFixture<AddregisterasexportunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddregisterasexportunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddregisterasexportunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
