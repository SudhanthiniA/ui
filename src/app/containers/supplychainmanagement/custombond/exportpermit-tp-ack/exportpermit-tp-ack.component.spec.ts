import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportpermitTpAckComponent } from './exportpermit-tp-ack.component';

describe('ExportpermitTpAckComponent', () => {
  let component: ExportpermitTpAckComponent;
  let fixture: ComponentFixture<ExportpermitTpAckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportpermitTpAckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportpermitTpAckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
