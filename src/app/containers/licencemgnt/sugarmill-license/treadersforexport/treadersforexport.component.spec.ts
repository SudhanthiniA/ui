import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreadersforexportComponent } from './treadersforexport.component';

describe('TreadersforexportComponent', () => {
  let component: TreadersforexportComponent;
  let fixture: ComponentFixture<TreadersforexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreadersforexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreadersforexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
