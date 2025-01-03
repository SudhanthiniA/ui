import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcureofmolassesComponent } from './procureofmolasses.component';

describe('ProcureofmolassesComponent', () => {
  let component: ProcureofmolassesComponent;
  let fixture: ComponentFixture<ProcureofmolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcureofmolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcureofmolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
