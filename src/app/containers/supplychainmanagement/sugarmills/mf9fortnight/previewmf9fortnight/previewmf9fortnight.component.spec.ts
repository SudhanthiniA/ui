import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Previewmf9fortnightComponent } from './previewmf9fortnight.component';

describe('Previewmf9fortnightComponent', () => {
  let component: Previewmf9fortnightComponent;
  let fixture: ComponentFixture<Previewmf9fortnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Previewmf9fortnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Previewmf9fortnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
