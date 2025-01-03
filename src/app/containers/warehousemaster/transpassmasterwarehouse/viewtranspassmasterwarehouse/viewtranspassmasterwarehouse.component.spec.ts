import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtranspassmasterwarehouseComponent } from './viewtranspassmasterwarehouse.component';

describe('ViewtranspassmasterwarehouseComponent', () => {
  let component: ViewtranspassmasterwarehouseComponent;
  let fixture: ComponentFixture<ViewtranspassmasterwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtranspassmasterwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtranspassmasterwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
