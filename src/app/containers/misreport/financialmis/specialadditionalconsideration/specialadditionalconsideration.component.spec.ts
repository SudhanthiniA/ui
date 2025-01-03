import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialadditionalconsiderationComponent } from './specialadditionalconsideration.component';

describe('SpecialadditionalconsiderationComponent', () => {
  let component: SpecialadditionalconsiderationComponent;
  let fixture: ComponentFixture<SpecialadditionalconsiderationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialadditionalconsiderationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialadditionalconsiderationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
