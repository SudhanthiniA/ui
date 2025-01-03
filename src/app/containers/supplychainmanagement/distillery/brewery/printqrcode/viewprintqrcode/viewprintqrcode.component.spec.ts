import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprintqrcodeComponent } from './viewprintqrcode.component';

describe('ViewprintqrcodeComponent', () => {
  let component: ViewprintqrcodeComponent;
  let fixture: ComponentFixture<ViewprintqrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprintqrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprintqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
