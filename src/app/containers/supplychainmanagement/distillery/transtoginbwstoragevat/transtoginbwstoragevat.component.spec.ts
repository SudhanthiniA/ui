import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstoginbwstoragevatComponent } from './transtoginbwstoragevat.component';

describe('TranstoginbwstoragevatComponent', () => {
  let component: TranstoginbwstoragevatComponent;
  let fixture: ComponentFixture<TranstoginbwstoragevatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranstoginbwstoragevatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranstoginbwstoragevatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
