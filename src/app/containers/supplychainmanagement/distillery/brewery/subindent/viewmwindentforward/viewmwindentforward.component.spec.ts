import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwindentforwardComponent } from './viewmwindentforward.component';

describe('ViewmwindentforwardComponent', () => {
  let component: ViewmwindentforwardComponent;
  let fixture: ComponentFixture<ViewmwindentforwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwindentforwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwindentforwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
