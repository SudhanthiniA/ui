import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewtransportpassgenerationComponent } from './previewtransportpassgeneration.component';

describe('PreviewtransportpassgenerationComponent', () => {
  let component: PreviewtransportpassgenerationComponent;
  let fixture: ComponentFixture<PreviewtransportpassgenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewtransportpassgenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewtransportpassgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
