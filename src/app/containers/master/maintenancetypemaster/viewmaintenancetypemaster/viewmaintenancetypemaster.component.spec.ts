import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmaintenancetypemasterComponent } from './viewmaintenancetypemaster.component';

describe('ViewmaintenancetypemasterComponent', () => {
  let component: ViewmaintenancetypemasterComponent;
  let fixture: ComponentFixture<ViewmaintenancetypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmaintenancetypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmaintenancetypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
