import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationofproplanofbeerComponent } from './declarationofproplanofbeer.component';

describe('DeclarationofproplanofbeerComponent', () => {
  let component: DeclarationofproplanofbeerComponent;
  let fixture: ComponentFixture<DeclarationofproplanofbeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationofproplanofbeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationofproplanofbeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
