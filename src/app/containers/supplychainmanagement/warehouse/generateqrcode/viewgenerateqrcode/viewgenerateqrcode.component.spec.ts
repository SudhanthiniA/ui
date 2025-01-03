import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgenerateqrcodeComponent } from './viewgenerateqrcode.component';

describe('ViewgenerateqrcodeComponent', () => {
  let component: ViewgenerateqrcodeComponent;
  let fixture: ComponentFixture<ViewgenerateqrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgenerateqrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgenerateqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
