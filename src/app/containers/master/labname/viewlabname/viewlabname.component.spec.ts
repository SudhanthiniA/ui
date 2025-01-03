import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlabnameComponent } from './viewlabname.component';

describe('ViewlabnameComponent', () => {
  let component: ViewlabnameComponent;
  let fixture: ComponentFixture<ViewlabnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlabnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlabnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
