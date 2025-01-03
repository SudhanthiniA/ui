import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpasscancellationComponent } from './viewpasscancellation.component';

describe('ViewpasscancellationComponent', () => {
  let component: ViewpasscancellationComponent;
  let fixture: ComponentFixture<ViewpasscancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpasscancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpasscancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
