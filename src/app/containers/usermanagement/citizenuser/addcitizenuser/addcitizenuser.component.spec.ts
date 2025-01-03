import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcitizenuserComponent } from './addcitizenuser.component';

describe('AddcitizenuserComponent', () => {
  let component: AddcitizenuserComponent;
  let fixture: ComponentFixture<AddcitizenuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcitizenuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcitizenuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
