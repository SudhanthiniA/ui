import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Previewmf4RecivedComponent } from './previewmf4-recived.component';

describe('Previewmf4RecivedComponent', () => {
  let component: Previewmf4RecivedComponent;
  let fixture: ComponentFixture<Previewmf4RecivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Previewmf4RecivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Previewmf4RecivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
