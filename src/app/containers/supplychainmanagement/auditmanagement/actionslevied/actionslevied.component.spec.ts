import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsleviedComponent } from './actionslevied.component';

describe('ActionsleviedComponent', () => {
  let component: ActionsleviedComponent;
  let fixture: ComponentFixture<ActionsleviedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsleviedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsleviedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
