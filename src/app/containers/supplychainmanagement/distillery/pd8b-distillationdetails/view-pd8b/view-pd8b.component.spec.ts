import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPd8bComponent } from './view-pd8b.component';

describe('ViewPd8bComponent', () => {
  let component: ViewPd8bComponent;
  let fixture: ComponentFixture<ViewPd8bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPd8bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPd8bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
