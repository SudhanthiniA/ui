import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtwoComponent } from './addtwo.component';

describe('AddtwoComponent', () => {
  let component: AddtwoComponent;
  let fixture: ComponentFixture<AddtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
