import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationofmolassesComponent } from './declarationofmolasses.component';

describe('DeclarationofmolassesComponent', () => {
  let component: DeclarationofmolassesComponent;
  let fixture: ComponentFixture<DeclarationofmolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationofmolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationofmolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
