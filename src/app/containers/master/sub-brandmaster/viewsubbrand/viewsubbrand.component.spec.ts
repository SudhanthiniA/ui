import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubbrandComponent } from './viewsubbrand.component';

describe('ViewsubbrandComponent', () => {
  let component: ViewsubbrandComponent;
  let fixture: ComponentFixture<ViewsubbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsubbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
