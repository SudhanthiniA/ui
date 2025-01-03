import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewyearComponent } from './viewyear.component';

describe('ViewyearComponent', () => {
  let component: ViewyearComponent;
  let fixture: ComponentFixture<ViewyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
