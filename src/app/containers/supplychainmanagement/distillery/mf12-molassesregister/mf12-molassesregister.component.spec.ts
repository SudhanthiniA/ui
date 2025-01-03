import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf12MolassesregisterComponent } from './mf12-molassesregister.component';

describe('Mf12MolassesregisterComponent', () => {
  let component: Mf12MolassesregisterComponent;
  let fixture: ComponentFixture<Mf12MolassesregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf12MolassesregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf12MolassesregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
