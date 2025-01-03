import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmasterwarehouseComponent } from './viewmasterwarehouse.component';

describe('ViewmasterwarehouseComponent', () => {
  let component: ViewmasterwarehouseComponent;
  let fixture: ComponentFixture<ViewmasterwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmasterwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmasterwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
