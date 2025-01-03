import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptviewComponent } from './deptview.component';

describe('DeptviewComponent', () => {
  let component: DeptviewComponent;
  let fixture: ComponentFixture<DeptviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
