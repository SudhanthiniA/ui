import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationofcotnewComponent } from './declarationofcotnew.component';

describe('DeclarationofcotnewComponent', () => {
  let component: DeclarationofcotnewComponent;
  let fixture: ComponentFixture<DeclarationofcotnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationofcotnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationofcotnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
