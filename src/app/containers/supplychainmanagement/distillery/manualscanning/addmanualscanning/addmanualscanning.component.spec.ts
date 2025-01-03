import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmanualscanningComponent } from './addmanualscanning.component';

describe('AddmanualscanningComponent', () => {
  let component: AddmanualscanningComponent;
  let fixture: ComponentFixture<AddmanualscanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmanualscanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmanualscanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
