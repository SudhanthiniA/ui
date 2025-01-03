import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockinnewComponent } from './addstockinnew.component';

describe('AddstockinnewComponent', () => {
  let component: AddstockinnewComponent;
  let fixture: ComponentFixture<AddstockinnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockinnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockinnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
