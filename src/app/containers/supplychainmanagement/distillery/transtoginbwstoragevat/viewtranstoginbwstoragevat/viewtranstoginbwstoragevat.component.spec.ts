import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtranstoginbwstoragevatComponent } from './viewtranstoginbwstoragevat.component';

describe('ViewtranstoginbwstoragevatComponent', () => {
  let component: ViewtranstoginbwstoragevatComponent;
  let fixture: ComponentFixture<ViewtranstoginbwstoragevatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtranstoginbwstoragevatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtranstoginbwstoragevatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
