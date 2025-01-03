import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPd9cComponent } from './view-pd9c.component';

describe('ViewPd9cComponent', () => {
  let component: ViewPd9cComponent;
  let fixture: ComponentFixture<ViewPd9cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPd9cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPd9cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
