import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportpassmodificationapprovalComponent } from './transportpassmodificationapproval.component';

describe('TransportpassmodificationapprovalComponent', () => {
  let component: TransportpassmodificationapprovalComponent;
  let fixture: ComponentFixture<TransportpassmodificationapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportpassmodificationapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportpassmodificationapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
