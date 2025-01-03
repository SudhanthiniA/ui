import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlicensefunctionalComponent } from './viewlicensefunctional.component';

describe('ViewlicensefunctionalComponent', () => {
  let component: ViewlicensefunctionalComponent;
  let fixture: ComponentFixture<ViewlicensefunctionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlicensefunctionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlicensefunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
