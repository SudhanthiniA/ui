import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorderpickupomdComponent } from './addorderpickupomd.component';

describe('AddorderpickupomdComponent', () => {
  let component: AddorderpickupomdComponent;
  let fixture: ComponentFixture<AddorderpickupomdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorderpickupomdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorderpickupomdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
