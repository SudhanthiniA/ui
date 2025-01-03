import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasewinesetupComponent } from './basewinesetup.component';

describe('BasewinesetupComponent', () => {
  let component: BasewinesetupComponent;
  let fixture: ComponentFixture<BasewinesetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasewinesetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasewinesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
