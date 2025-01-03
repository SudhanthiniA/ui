import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewdamagemissingComponent } from './previewdamagemissing.component';

describe('PreviewdamagemissingComponent', () => {
  let component: PreviewdamagemissingComponent;
  let fixture: ComponentFixture<PreviewdamagemissingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewdamagemissingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewdamagemissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
