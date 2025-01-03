import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmapassetsandassetsbrandComponent } from './viewmapassetsandassetsbrand.component';

describe('ViewmapassetsandassetsbrandComponent', () => {
  let component: ViewmapassetsandassetsbrandComponent;
  let fixture: ComponentFixture<ViewmapassetsandassetsbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmapassetsandassetsbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmapassetsandassetsbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
