import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskforceaddComponent } from './taskforceadd.component';

describe('TaskforceaddComponent', () => {
  let component: TaskforceaddComponent;
  let fixture: ComponentFixture<TaskforceaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskforceaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskforceaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
