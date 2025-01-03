import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccidentalcaserequestComponent } from './addaccidentalcaserequest.component';

describe('AddaccidentalcaserequestComponent', () => {
  let component: AddaccidentalcaserequestComponent;
  let fixture: ComponentFixture<AddaccidentalcaserequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaccidentalcaserequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccidentalcaserequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
