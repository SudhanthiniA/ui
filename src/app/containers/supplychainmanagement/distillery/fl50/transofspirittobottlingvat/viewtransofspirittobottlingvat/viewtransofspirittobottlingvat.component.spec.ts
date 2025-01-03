import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransofspirittobottlingvatComponent } from './viewtransofspirittobottlingvat.component';

describe('ViewtransofspirittobottlingvatComponent', () => {
  let component: ViewtransofspirittobottlingvatComponent;
  let fixture: ComponentFixture<ViewtransofspirittobottlingvatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransofspirittobottlingvatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransofspirittobottlingvatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
