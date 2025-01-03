import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolassesComponent } from './molasses.component';

describe('MolassesComponent', () => {
  let component: MolassesComponent;
  let fixture: ComponentFixture<MolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
