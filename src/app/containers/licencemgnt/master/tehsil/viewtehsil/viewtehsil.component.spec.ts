import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtehsilComponent } from './viewtehsil.component';

describe('ViewtehsilComponent', () => {
  let component: ViewtehsilComponent;
  let fixture: ComponentFixture<ViewtehsilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtehsilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtehsilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
