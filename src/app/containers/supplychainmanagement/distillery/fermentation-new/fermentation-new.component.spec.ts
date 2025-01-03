import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentationNewComponent } from './fermentation-new.component';

describe('FermentationNewComponent', () => {
  let component: FermentationNewComponent;
  let fixture: ComponentFixture<FermentationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FermentationNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FermentationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
