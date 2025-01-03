import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddindentspiritpurchaseComponent } from './addindentspiritpurchase.component';

describe('AddindentspiritpurchaseComponent', () => {
  let component: AddindentspiritpurchaseComponent;
  let fixture: ComponentFixture<AddindentspiritpurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddindentspiritpurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddindentspiritpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
