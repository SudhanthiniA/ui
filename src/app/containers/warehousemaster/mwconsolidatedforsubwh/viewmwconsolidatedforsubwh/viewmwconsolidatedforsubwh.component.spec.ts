import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwconsolidatedforsubwhComponent } from './viewmwconsolidatedforsubwh.component';

describe('ViewmwconsolidatedforsubwhComponent', () => {
  let component: ViewmwconsolidatedforsubwhComponent;
  let fixture: ComponentFixture<ViewmwconsolidatedforsubwhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwconsolidatedforsubwhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwconsolidatedforsubwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
