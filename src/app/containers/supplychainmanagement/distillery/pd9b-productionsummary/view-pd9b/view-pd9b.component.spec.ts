import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPd9bComponent } from './view-pd9b.component';

describe('ViewPd9bComponent', () => {
  let component: ViewPd9bComponent;
  let fixture: ComponentFixture<ViewPd9bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPd9bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPd9bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
