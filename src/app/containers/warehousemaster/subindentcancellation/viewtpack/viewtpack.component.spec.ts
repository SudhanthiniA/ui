import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtpackComponent } from './viewtpack.component';

describe('ViewtpackComponent', () => {
  let component: ViewtpackComponent;
  let fixture: ComponentFixture<ViewtpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
