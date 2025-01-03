import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewaccidentalcasedeologinComponent } from './previewaccidentalcasedeologin.component';

describe('PreviewaccidentalcasedeologinComponent', () => {
  let component: PreviewaccidentalcasedeologinComponent;
  let fixture: ComponentFixture<PreviewaccidentalcasedeologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewaccidentalcasedeologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewaccidentalcasedeologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
