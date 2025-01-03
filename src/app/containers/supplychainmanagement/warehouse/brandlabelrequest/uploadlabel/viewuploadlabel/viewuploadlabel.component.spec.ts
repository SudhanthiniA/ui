import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuploadlabelComponent } from './viewuploadlabel.component';

describe('ViewuploadlabelComponent', () => {
  let component: ViewuploadlabelComponent;
  let fixture: ComponentFixture<ViewuploadlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuploadlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuploadlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
