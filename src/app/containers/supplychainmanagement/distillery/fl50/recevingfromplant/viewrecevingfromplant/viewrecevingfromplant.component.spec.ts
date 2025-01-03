import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecevingfromplantComponent } from './viewrecevingfromplant.component';

describe('ViewrecevingfromplantComponent', () => {
  let component: ViewrecevingfromplantComponent;
  let fixture: ComponentFixture<ViewrecevingfromplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrecevingfromplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrecevingfromplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
