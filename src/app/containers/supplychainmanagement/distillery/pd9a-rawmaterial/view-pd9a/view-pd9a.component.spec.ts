import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPd9aComponent } from './view-pd9a.component';

describe('ViewPd9aComponent', () => {
  let component: ViewPd9aComponent;
  let fixture: ComponentFixture<ViewPd9aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPd9aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPd9aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
