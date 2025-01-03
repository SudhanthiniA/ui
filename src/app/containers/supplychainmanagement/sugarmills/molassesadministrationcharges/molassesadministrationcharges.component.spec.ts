import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolassesadministrationchargesComponent } from './molassesadministrationcharges.component';

describe('MolassesadministrationchargesComponent', () => {
  let component: MolassesadministrationchargesComponent;
  let fixture: ComponentFixture<MolassesadministrationchargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolassesadministrationchargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolassesadministrationchargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
