import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredeclarationComponent } from './predeclaration.component';

describe('PredeclarationComponent', () => {
  let component: PredeclarationComponent;
  let fixture: ComponentFixture<PredeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
