import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockmovementComponent } from './viewstockmovement.component';

describe('ViewstockmovementComponent', () => {
  let component: ViewstockmovementComponent;
  let fixture: ComponentFixture<ViewstockmovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockmovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockmovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
