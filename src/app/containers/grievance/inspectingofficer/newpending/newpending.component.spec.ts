import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpendingComponent } from './newpending.component';

describe('NewpendingComponent', () => {
  let component: NewpendingComponent;
  let fixture: ComponentFixture<NewpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
