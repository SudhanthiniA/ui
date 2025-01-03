import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenuploadlabelComponent } from './screenuploadlabel.component';

describe('ScreenuploadlabelComponent', () => {
  let component: ScreenuploadlabelComponent;
  let fixture: ComponentFixture<ScreenuploadlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenuploadlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenuploadlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
