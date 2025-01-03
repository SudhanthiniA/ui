import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwconsolidatedforsubwhComponent } from './mwconsolidatedforsubwh.component';

describe('MwconsolidatedforsubwhComponent', () => {
  let component: MwconsolidatedforsubwhComponent;
  let fixture: ComponentFixture<MwconsolidatedforsubwhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwconsolidatedforsubwhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwconsolidatedforsubwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
