import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterwarehouseComponent } from './masterwarehouse.component';

describe('MasterwarehouseComponent', () => {
  let component: MasterwarehouseComponent;
  let fixture: ComponentFixture<MasterwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
