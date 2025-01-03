import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadcodeComponent } from './headcode.component';

describe('HeadcodeComponent', () => {
  let component: HeadcodeComponent;
  let fixture: ComponentFixture<HeadcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
