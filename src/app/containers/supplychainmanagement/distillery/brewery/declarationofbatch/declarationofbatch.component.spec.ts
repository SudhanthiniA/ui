import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationofbatchComponent } from './declarationofbatch.component';

describe('DeclarationofbatchComponent', () => {
  let component: DeclarationofbatchComponent;
  let fixture: ComponentFixture<DeclarationofbatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationofbatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationofbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
