import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchasereturnComponent } from './addpurchasereturn.component';

describe('AddpurchasereturnComponent', () => {
  let component: AddpurchasereturnComponent;
  let fixture: ComponentFixture<AddpurchasereturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpurchasereturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpurchasereturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
