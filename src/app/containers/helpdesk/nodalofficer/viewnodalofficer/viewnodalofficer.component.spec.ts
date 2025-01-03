import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnodalofficerComponent } from './viewnodalofficer.component';

describe('ViewnodalofficerComponent', () => {
  let component: ViewnodalofficerComponent;
  let fixture: ComponentFixture<ViewnodalofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnodalofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnodalofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
