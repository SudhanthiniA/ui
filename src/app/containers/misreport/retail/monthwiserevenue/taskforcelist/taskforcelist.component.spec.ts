import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskforcelistComponent } from './taskforcelist.component';

describe('TaskforcelistComponent', () => {
  let component: TaskforcelistComponent;
  let fixture: ComponentFixture<TaskforcelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskforcelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskforcelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
