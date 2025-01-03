import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NontransferNgWh24hrsComponent } from './nontransfer-ng-wh24hrs.component';

describe('NontransferNgWh24hrsComponent', () => {
  let component: NontransferNgWh24hrsComponent;
  let fixture: ComponentFixture<NontransferNgWh24hrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NontransferNgWh24hrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NontransferNgWh24hrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
