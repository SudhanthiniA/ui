import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransportmodeComponent } from './viewtransportmode.component';

describe('ViewtransportmodeComponent', () => {
  let component: ViewtransportmodeComponent;
  let fixture: ComponentFixture<ViewtransportmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransportmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransportmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
