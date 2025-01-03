import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorderpickComponent } from './addorderpick.component';

describe('AddorderpickComponent', () => {
  let component: AddorderpickComponent;
  let fixture: ComponentFixture<AddorderpickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorderpickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorderpickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
