import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousestockinComponent } from './warehousestockin.component';

describe('WarehousestockinComponent', () => {
  let component: WarehousestockinComponent;
  let fixture: ComponentFixture<WarehousestockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehousestockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousestockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
