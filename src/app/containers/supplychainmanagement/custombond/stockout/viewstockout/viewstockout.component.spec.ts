import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockoutComponent } from './viewstockout.component';

describe('ViewstockoutComponent', () => {
  let component: ViewstockoutComponent;
  let fixture: ComponentFixture<ViewstockoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
