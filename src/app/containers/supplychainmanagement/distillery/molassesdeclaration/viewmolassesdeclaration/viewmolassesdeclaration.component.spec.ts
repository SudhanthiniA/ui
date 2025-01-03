import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmolassesdeclarationComponent } from './viewmolassesdeclaration.component';

describe('ViewmolassesdeclarationComponent', () => {
  let component: ViewmolassesdeclarationComponent;
  let fixture: ComponentFixture<ViewmolassesdeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmolassesdeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmolassesdeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
