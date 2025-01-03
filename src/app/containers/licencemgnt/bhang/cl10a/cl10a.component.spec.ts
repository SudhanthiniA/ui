import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl10aComponent } from './cl10a.component';

describe('Cl10aComponent', () => {
  let component: Cl10aComponent;
  let fixture: ComponentFixture<Cl10aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl10aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl10aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
