import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewstockinnewComponent } from './previewstockinnew.component';

describe('PreviewstockinnewComponent', () => {
  let component: PreviewstockinnewComponent;
  let fixture: ComponentFixture<PreviewstockinnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewstockinnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewstockinnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
