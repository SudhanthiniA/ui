import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtanktransferComponent } from './viewtanktransfer.component';

describe('ViewtanktransferComponent', () => {
  let component: ViewtanktransferComponent;
  let fixture: ComponentFixture<ViewtanktransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtanktransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtanktransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
