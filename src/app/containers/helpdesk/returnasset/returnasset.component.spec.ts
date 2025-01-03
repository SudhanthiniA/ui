import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnassetComponent } from './returnasset.component';

describe('ReturnassetComponent', () => {
  let component: ReturnassetComponent;
  let fixture: ComponentFixture<ReturnassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
