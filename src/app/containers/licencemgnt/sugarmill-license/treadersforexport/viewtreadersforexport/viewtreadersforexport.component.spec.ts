import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtreadersforexportComponent } from './viewtreadersforexport.component';

describe('ViewtreadersforexportComponent', () => {
  let component: ViewtreadersforexportComponent;
  let fixture: ComponentFixture<ViewtreadersforexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtreadersforexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtreadersforexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
