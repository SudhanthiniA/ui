import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvtsComponent } from './newvts.component;

describe('NewvtsComponent', () => {
  let component: NewvtsComponent;
  let fixture: ComponentFixture<NewvtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewvtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
