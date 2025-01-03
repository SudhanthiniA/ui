import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspassparentloginComponent } from './transpassparentlogin.component';

describe('TranspassparentloginComponent', () => {
  let component: TranspassparentloginComponent;
  let fixture: ComponentFixture<TranspassparentloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranspassparentloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranspassparentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
