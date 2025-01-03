import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassigntheofficerforinvestigatingComponent } from './addassigntheofficerforinvestigating.component';

describe('AddassigntheofficerforinvestigatingComponent', () => {
  let component: AddassigntheofficerforinvestigatingComponent;
  let fixture: ComponentFixture<AddassigntheofficerforinvestigatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddassigntheofficerforinvestigatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddassigntheofficerforinvestigatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
