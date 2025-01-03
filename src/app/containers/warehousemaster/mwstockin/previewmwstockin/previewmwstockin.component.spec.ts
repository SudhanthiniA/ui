import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewmwstockinComponent } from './previewmwstockin.component';

describe('PreviewmwstockinComponent', () => {
  let component: PreviewmwstockinComponent;
  let fixture: ComponentFixture<PreviewmwstockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewmwstockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewmwstockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
