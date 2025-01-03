import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmolassesdeclarationComponent } from './addmolassesdeclaration.component';

describe('AddmolassesdeclarationComponent', () => {
  let component: AddmolassesdeclarationComponent;
  let fixture: ComponentFixture<AddmolassesdeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmolassesdeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmolassesdeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
