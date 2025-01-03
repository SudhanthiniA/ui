import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransofspirittoclflblendingvatComponent } from './viewtransofspirittoclflblendingvat.component';

describe('ViewtransofspirittoclflblendingvatComponent', () => {
  let component: ViewtransofspirittoclflblendingvatComponent;
  let fixture: ComponentFixture<ViewtransofspirittoclflblendingvatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransofspirittoclflblendingvatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransofspirittoclflblendingvatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
