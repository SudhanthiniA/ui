import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Previewpd8aComponent } from './previewpd8a.component';

describe('Previewpd8aComponent', () => {
  let component: Previewpd8aComponent;
  let fixture: ComponentFixture<Previewpd8aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Previewpd8aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Previewpd8aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
