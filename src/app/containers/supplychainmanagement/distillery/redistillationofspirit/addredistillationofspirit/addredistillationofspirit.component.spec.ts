import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddredistillationofspiritComponent } from './addredistillationofspirit.component';

describe('AddredistillationofspiritComponent', () => {
  let component: AddredistillationofspiritComponent;
  let fixture: ComponentFixture<AddredistillationofspiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddredistillationofspiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddredistillationofspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
