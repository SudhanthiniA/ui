import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwqrcodeuploadComponent } from './mwqrcodeupload.component';

describe('MwqrcodeuploadComponent', () => {
  let component: MwqrcodeuploadComponent;
  let fixture: ComponentFixture<MwqrcodeuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwqrcodeuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwqrcodeuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
