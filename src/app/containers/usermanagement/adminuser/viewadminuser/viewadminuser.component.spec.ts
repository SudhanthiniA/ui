import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadminuserComponent } from './viewadminuser.component';

describe('ViewadminuserComponent', () => {
  let component: ViewadminuserComponent;
  let fixture: ComponentFixture<ViewadminuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewadminuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadminuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
