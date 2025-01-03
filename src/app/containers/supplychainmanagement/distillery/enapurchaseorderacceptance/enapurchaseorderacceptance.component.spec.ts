import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnapurchaseorderacceptanceComponent } from './enapurchaseorderacceptance.component';

describe('EnapurchaseorderacceptanceComponent', () => {
  let component: EnapurchaseorderacceptanceComponent;
  let fixture: ComponentFixture<EnapurchaseorderacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnapurchaseorderacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnapurchaseorderacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
