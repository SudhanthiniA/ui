import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeadcodeComponent } from './view-headcode.component';

describe('ViewHeadcodeComponent', () => {
  let component: ViewHeadcodeComponent;
  let fixture: ComponentFixture<ViewHeadcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHeadcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHeadcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
