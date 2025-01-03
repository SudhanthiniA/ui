import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddposdamageComponent } from './addposdamage.component';

describe('AddposdamageComponent', () => {
  let component: AddposdamageComponent;
  let fixture: ComponentFixture<AddposdamageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddposdamageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddposdamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
