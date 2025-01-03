import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddviewingmonitoringverificationComponent } from './addviewingmonitoringverification.component';

describe('AddviewingmonitoringverificationComponent', () => {
  let component: AddviewingmonitoringverificationComponent;
  let fixture: ComponentFixture<AddviewingmonitoringverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddviewingmonitoringverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddviewingmonitoringverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
