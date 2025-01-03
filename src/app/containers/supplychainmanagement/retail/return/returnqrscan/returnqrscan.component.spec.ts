import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnqrscanComponent } from './returnqrscan.component';

describe('ReturnqrscanComponent', () => {
  let component: ReturnqrscanComponent;
  let fixture: ComponentFixture<ReturnqrscanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnqrscanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnqrscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
