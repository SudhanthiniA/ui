import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtankconversionComponent } from './addtankconversion.component';

describe('AddtankconversionComponent', () => {
  let component: AddtankconversionComponent;
  let fixture: ComponentFixture<AddtankconversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtankconversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtankconversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
