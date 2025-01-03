import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillconfirmationComponent } from './billconfirmation.component';

describe('BillconfirmationComponent', () => {
  let component: BillconfirmationComponent;
  let fixture: ComponentFixture<BillconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
