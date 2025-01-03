import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckgrievanceformComponent } from './checkgrievanceform.component';

describe('CheckgrievanceformComponent', () => {
  let component: CheckgrievanceformComponent;
  let fixture: ComponentFixture<CheckgrievanceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckgrievanceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckgrievanceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
