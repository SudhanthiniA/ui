import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassigntheofficerforinvestigatingComponent } from './viewassigntheofficerforinvestigating.component';

describe('ViewassigntheofficerforinvestigatingComponent', () => {
  let component: ViewassigntheofficerforinvestigatingComponent;
  let fixture: ComponentFixture<ViewassigntheofficerforinvestigatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewassigntheofficerforinvestigatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewassigntheofficerforinvestigatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
