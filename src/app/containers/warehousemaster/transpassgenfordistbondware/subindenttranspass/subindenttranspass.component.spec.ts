import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubindenttranspassComponent } from './subindenttranspass.component';

describe('SubindenttranspassComponent', () => {
  let component: SubindenttranspassComponent;
  let fixture: ComponentFixture<SubindenttranspassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubindenttranspassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubindenttranspassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
