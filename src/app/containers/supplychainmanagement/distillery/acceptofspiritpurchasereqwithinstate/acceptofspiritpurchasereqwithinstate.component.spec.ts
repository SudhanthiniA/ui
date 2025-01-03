import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptofspiritpurchasereqwithinstateComponent } from './acceptofspiritpurchasereqwithinstate.component';

describe('AcceptofspiritpurchasereqwithinstateComponent', () => {
  let component: AcceptofspiritpurchasereqwithinstateComponent;
  let fixture: ComponentFixture<AcceptofspiritpurchasereqwithinstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptofspiritpurchasereqwithinstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptofspiritpurchasereqwithinstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
