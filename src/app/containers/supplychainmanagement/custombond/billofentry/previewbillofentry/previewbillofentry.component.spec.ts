import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewbillofentryComponent } from './previewbillofentry.component';

describe('PreviewbillofentryComponent', () => {
  let component: PreviewbillofentryComponent;
  let fixture: ComponentFixture<PreviewbillofentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewbillofentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewbillofentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
