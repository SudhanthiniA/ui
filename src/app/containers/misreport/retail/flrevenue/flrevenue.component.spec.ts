import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlrevenueComponent } from './flrevenue.component';

describe('FlrevenueComponent', () => {
  let component: FlrevenueComponent;
  let fixture: ComponentFixture<FlrevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlrevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlrevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
