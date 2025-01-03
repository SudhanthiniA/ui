import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddabstractComponent } from './addabstract.component';

describe('AddabstractComponent', () => {
  let component: AddabstractComponent;
  let fixture: ComponentFixture<AddabstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddabstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddabstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
