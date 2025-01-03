import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagemissingproductsComponent } from './damagemissingproducts.component';

describe('DamagemissingproductsComponent', () => {
  let component: DamagemissingproductsComponent;
  let fixture: ComponentFixture<DamagemissingproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagemissingproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagemissingproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
