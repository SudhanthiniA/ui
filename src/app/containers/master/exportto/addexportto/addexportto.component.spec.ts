import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexporttoComponent } from './addexportto.component';

describe('AddexporttoComponent', () => {
  let component: AddexporttoComponent;
  let fixture: ComponentFixture<AddexporttoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexporttoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexporttoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
