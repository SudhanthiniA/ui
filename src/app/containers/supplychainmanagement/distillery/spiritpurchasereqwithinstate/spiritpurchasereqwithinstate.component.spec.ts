import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritpurchasereqwithinstateComponent } from './spiritpurchasereqwithinstate.component';

describe('SpiritpurchasereqwithinstateComponent', () => {
  let component: SpiritpurchasereqwithinstateComponent;
  let fixture: ComponentFixture<SpiritpurchasereqwithinstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritpurchasereqwithinstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritpurchasereqwithinstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
