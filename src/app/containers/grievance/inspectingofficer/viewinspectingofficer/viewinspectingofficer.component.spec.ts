import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinspectingofficerComponent } from './viewinspectingofficer.component';

describe('ViewinspectingofficerComponent', () => {
  let component: ViewinspectingofficerComponent;
  let fixture: ComponentFixture<ViewinspectingofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewinspectingofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinspectingofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
