import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcaseinitiatingofficerloginComponent } from './viewcaseinitiatingofficerlogin.component';

describe('ViewcaseinitiatingofficerloginComponent', () => {
  let component: ViewcaseinitiatingofficerloginComponent;
  let fixture: ComponentFixture<ViewcaseinitiatingofficerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcaseinitiatingofficerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcaseinitiatingofficerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
