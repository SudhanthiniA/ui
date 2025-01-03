import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondwarehouseComponent } from './retail.component';

describe('BondwarehouseComponent', () => {
  let component: BondwarehouseComponent;
  let fixture: ComponentFixture<BondwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
