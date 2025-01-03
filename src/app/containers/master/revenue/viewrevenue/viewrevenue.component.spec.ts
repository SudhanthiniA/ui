import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrevenueComponent } from './viewrevenue.component';

describe('ViewrevenueComponent', () => {
  let component: ViewrevenueComponent;
  let fixture: ComponentFixture<ViewrevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
