import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntheofficerforinvestigatingComponent } from './assigntheofficerforinvestigating.component';

describe('AssigntheofficerforinvestigatingComponent', () => {
  let component: AssigntheofficerforinvestigatingComponent;
  let fixture: ComponentFixture<AssigntheofficerforinvestigatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigntheofficerforinvestigatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigntheofficerforinvestigatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
