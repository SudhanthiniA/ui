import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdtDeclarationFlComponent } from './pdt-declaration-fl.component';

describe('PdtDeclarationFlComponent', () => {
  let component: PdtDeclarationFlComponent;
  let fixture: ComponentFixture<PdtDeclarationFlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdtDeclarationFlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdtDeclarationFlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
