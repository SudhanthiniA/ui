import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtestproducttypeComponent } from './viewtestproducttype.component';

describe('ViewtestproducttypeComponent', () => {
  let component: ViewtestproducttypeComponent;
  let fixture: ComponentFixture<ViewtestproducttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtestproducttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtestproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
