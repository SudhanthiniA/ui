import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewstockComponent } from './previewstock.component';

describe('PreviewstockComponent', () => {
  let component: PreviewstockComponent;
  let fixture: ComponentFixture<PreviewstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
