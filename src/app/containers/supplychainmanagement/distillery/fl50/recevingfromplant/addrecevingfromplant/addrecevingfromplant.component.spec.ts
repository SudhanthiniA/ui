import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecevingfromplantComponent } from './addrecevingfromplant.component';

describe('AddrecevingfromplantComponent', () => {
  let component: AddrecevingfromplantComponent;
  let fixture: ComponentFixture<AddrecevingfromplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrecevingfromplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecevingfromplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
