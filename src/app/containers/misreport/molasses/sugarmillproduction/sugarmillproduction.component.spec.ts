import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarmillproductionComponent } from './sugarmillproduction.component';

describe('SugarmillproductionComponent', () => {
  let component: SugarmillproductionComponent;
  let fixture: ComponentFixture<SugarmillproductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarmillproductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarmillproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
