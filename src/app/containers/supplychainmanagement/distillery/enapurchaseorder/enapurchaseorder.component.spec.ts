import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnapurchaseorderComponent } from './enapurchaseorder.component';

describe('EnapurchaseorderComponent', () => {
  let component: EnapurchaseorderComponent;
  let fixture: ComponentFixture<EnapurchaseorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnapurchaseorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnapurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
