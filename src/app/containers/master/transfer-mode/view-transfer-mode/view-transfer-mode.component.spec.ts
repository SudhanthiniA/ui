import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransferModeComponent } from './view-transfer-mode.component';

describe('ViewTransferModeComponent', () => {
  let component: ViewTransferModeComponent;
  let fixture: ComponentFixture<ViewTransferModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTransferModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransferModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
