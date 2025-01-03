import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedittankconversionComponent } from './addedittankconversion.component';

describe('AddedittankconversionComponent', () => {
  let component: AddedittankconversionComponent;
  let fixture: ComponentFixture<AddedittankconversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedittankconversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedittankconversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
