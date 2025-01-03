import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhbrlicenseComponent } from './viewhbrlicense.component';

describe('ViewhbrlicenseComponent', () => {
  let component: ViewhbrlicenseComponent;
  let fixture: ComponentFixture<ViewhbrlicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhbrlicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhbrlicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
