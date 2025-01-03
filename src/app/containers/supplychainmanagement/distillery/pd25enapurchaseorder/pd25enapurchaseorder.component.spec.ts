import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd25enapurchaseorderComponent } from './pd25enapurchaseorder.component';

describe('Pd25enapurchaseorderComponent', () => {
  let component: Pd25enapurchaseorderComponent;
  let fixture: ComponentFixture<Pd25enapurchaseorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd25enapurchaseorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd25enapurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
