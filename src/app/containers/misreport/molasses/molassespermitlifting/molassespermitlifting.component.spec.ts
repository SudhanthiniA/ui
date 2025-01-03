import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolassespermitliftingComponent } from './molassespermitlifting.component';

describe('MolassespermitliftingComponent', () => {
  let component: MolassespermitliftingComponent;
  let fixture: ComponentFixture<MolassespermitliftingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolassespermitliftingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolassespermitliftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
