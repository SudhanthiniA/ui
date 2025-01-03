import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpdtDeclarationFlComponent } from './viewpdt-declaration-fl.component';

describe('ViewpdtDeclarationFlComponent', () => {
  let component: ViewpdtDeclarationFlComponent;
  let fixture: ComponentFixture<ViewpdtDeclarationFlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpdtDeclarationFlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpdtDeclarationFlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
