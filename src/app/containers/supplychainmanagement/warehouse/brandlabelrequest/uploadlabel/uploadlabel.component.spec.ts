import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadlabelComponent } from './uploadlabel.component';

describe('UploadlabelComponent', () => {
  let component: UploadlabelComponent;
  let fixture: ComponentFixture<UploadlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
