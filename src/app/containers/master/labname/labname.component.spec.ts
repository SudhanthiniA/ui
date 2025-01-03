import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabnameComponent } from './labname.component';

describe('LabnameComponent', () => {
  let component: LabnameComponent;
  let fixture: ComponentFixture<LabnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
