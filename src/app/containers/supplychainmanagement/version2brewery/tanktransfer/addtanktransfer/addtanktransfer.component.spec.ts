import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtanktransferComponent } from './addtanktransfer.component';

describe('AddtanktransferComponent', () => {
  let component: AddtanktransferComponent;
  let fixture: ComponentFixture<AddtanktransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtanktransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtanktransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
