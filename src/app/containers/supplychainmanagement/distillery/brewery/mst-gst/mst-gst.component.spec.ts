import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstGstComponent } from './mst-gst.component';

describe('MstGstComponent', () => {
  let component: MstGstComponent;
  let fixture: ComponentFixture<MstGstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstGstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstGstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
