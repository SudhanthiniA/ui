import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewstockinComponent } from './previewstockin.component';

describe('PreviewstockinComponent', () => {
  let component: PreviewstockinComponent;
  let fixture: ComponentFixture<PreviewstockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewstockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewstockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
