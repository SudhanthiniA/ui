import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlicensefunctionalyearComponent } from './viewlicensefunctionalyear.component';

describe('ViewlicensefunctionalyearComponent', () => {
  let component: ViewlicensefunctionalyearComponent;
  let fixture: ComponentFixture<ViewlicensefunctionalyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlicensefunctionalyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlicensefunctionalyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
