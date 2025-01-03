import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolassesdeclarationComponent } from './molassesdeclaration.component';

describe('MolassesdeclarationComponent', () => {
  let component: MolassesdeclarationComponent;
  let fixture: ComponentFixture<MolassesdeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolassesdeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolassesdeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
