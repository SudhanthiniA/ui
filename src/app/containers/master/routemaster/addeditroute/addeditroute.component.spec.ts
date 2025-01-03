import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditrouteComponent } from './addeditroute.component';

describe('AddeditrouteComponent', () => {
  let component: AddeditrouteComponent;
  let fixture: ComponentFixture<AddeditrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
