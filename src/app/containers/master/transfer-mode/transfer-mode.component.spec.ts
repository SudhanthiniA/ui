import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferModeComponent } from './transfer-mode.component';

describe('TransferModeComponent', () => {
  let component: TransferModeComponent;
  let fixture: ComponentFixture<TransferModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
