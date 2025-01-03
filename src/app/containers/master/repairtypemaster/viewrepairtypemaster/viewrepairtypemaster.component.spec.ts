import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrepairtypemasterComponent } from './viewrepairtypemaster.component';

describe('ViewrepairtypemasterComponent', () => {
  let component: ViewrepairtypemasterComponent;
  let fixture: ComponentFixture<ViewrepairtypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrepairtypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrepairtypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
