import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdrafttpComponent } from './viewdrafttp.component';

describe('ViewdrafttpComponent', () => {
  let component: ViewdrafttpComponent;
  let fixture: ComponentFixture<ViewdrafttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdrafttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdrafttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
