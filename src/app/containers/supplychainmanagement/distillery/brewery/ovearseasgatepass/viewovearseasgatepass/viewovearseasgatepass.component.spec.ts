import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewovearseasgatepassComponent } from './viewovearseasgatepass.component';

describe('ViewovearseasgatepassComponent', () => {
  let component: ViewovearseasgatepassComponent;
  let fixture: ComponentFixture<ViewovearseasgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewovearseasgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewovearseasgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
