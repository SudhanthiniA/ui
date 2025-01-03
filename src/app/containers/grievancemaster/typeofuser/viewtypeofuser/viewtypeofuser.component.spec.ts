import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtypeofuserComponent } from './viewtypeofuser.component';

describe('ViewtypeofuserComponent', () => {
  let component: ViewtypeofuserComponent;
  let fixture: ComponentFixture<ViewtypeofuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtypeofuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtypeofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
