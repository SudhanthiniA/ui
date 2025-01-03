import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleproductplancancelComponent } from './bottleproductplancancel.component';

describe('BottleproductplancancelComponent', () => {
  let component: BottleproductplancancelComponent;
  let fixture: ComponentFixture<BottleproductplancancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottleproductplancancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottleproductplancancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
