import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddboxingComponent } from './addboxing.component';

describe('AddboxingComponent', () => {
  let component: AddboxingComponent;
  let fixture: ComponentFixture<AddboxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddboxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddboxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
