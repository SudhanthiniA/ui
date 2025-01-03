import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapassetsandassetsbrandComponent } from './mapassetsandassetsbrand.component';

describe('MapassetsandassetsbrandComponent', () => {
  let component: MapassetsandassetsbrandComponent;
  let fixture: ComponentFixture<MapassetsandassetsbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapassetsandassetsbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapassetsandassetsbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
