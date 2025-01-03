import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectingofficerComponent } from './inspectingofficer.component';

describe('InspectingofficerComponent', () => {
  let component: InspectingofficerComponent;
  let fixture: ComponentFixture<InspectingofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectingofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectingofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
