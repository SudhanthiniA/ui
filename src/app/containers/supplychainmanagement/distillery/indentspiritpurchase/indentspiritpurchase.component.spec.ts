import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentspiritpurchaseComponent } from './indentspiritpurchase.component';

describe('IndentspiritpurchaseComponent', () => {
  let component: IndentspiritpurchaseComponent;
  let fixture: ComponentFixture<IndentspiritpurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentspiritpurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentspiritpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
