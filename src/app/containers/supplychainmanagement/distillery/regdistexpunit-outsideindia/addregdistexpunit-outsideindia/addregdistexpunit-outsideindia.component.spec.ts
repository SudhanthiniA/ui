import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregdistexpunitOutsideindiaComponent } from './addregdistexpunit-outsideindia.component';

describe('AddregdistexpunitOutsideindiaComponent', () => {
  let component: AddregdistexpunitOutsideindiaComponent;
  let fixture: ComponentFixture<AddregdistexpunitOutsideindiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddregdistexpunitOutsideindiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddregdistexpunitOutsideindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
