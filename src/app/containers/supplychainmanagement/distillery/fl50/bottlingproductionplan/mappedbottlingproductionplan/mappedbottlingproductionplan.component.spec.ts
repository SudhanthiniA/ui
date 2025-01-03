import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappedbottlingproductionplanComponent } from './mappedbottlingproductionplan.component';

describe('MappedbottlingproductionplanComponent', () => {
  let component: MappedbottlingproductionplanComponent;
  let fixture: ComponentFixture<MappedbottlingproductionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappedbottlingproductionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappedbottlingproductionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
