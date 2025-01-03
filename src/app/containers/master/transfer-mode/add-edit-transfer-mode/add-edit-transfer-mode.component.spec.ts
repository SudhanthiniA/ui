import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTransferModeComponent } from './add-edit-transfer-mode.component';

describe('AddEditTransferModeComponent', () => {
  let component: AddEditTransferModeComponent;
  let fixture: ComponentFixture<AddEditTransferModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTransferModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTransferModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
