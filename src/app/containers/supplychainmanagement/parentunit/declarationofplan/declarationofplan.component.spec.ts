import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationofplanComponent } from './declarationofplan.component';

describe('DeclarationofplanComponent', () => {
  let component: DeclarationofplanComponent;
  let fixture: ComponentFixture<DeclarationofplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationofplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationofplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
