import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrolemanageComponent } from './viewrolemanage.component';

describe('ViewrolemanageComponent', () => {
  let component: ViewrolemanageComponent;
  let fixture: ComponentFixture<ViewrolemanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrolemanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrolemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
