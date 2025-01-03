import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderallocationComponent } from './vieworderallocation.component';

describe('VieworderallocationComponent', () => {
  let component: VieworderallocationComponent;
  let fixture: ComponentFixture<VieworderallocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderallocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
