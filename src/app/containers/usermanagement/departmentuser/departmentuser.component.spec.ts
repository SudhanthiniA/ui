import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentuserComponent } from './departmentuser.component';

describe('DepartmentuserComponent', () => {
  let component: DepartmentuserComponent;
  let fixture: ComponentFixture<DepartmentuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
