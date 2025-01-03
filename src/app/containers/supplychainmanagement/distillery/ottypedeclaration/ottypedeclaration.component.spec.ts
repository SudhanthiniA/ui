import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OttypedeclarationComponent } from './ottypedeclaration.component';

describe('OttypedeclarationComponent', () => {
  let component: OttypedeclarationComponent;
  let fixture: ComponentFixture<OttypedeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OttypedeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OttypedeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
