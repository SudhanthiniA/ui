import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpdtDeclarationFlComponent } from './addpdt-declaration-fl.component';

describe('AddpdtDeclarationFlComponent', () => {
  let component: AddpdtDeclarationFlComponent;
  let fixture: ComponentFixture<AddpdtDeclarationFlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpdtDeclarationFlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpdtDeclarationFlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
