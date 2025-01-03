import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferfromstoragetobottlingComponent } from './transferfromstoragetobottling.component';

describe('TransferfromstoragetobottlingComponent', () => {
  let component: TransferfromstoragetobottlingComponent;
  let fixture: ComponentFixture<TransferfromstoragetobottlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferfromstoragetobottlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferfromstoragetobottlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
