import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolassesTypeComponent } from './molasses-type.component';

describe('MolassesTypeComponent', () => {
  let component: MolassesTypeComponent;
  let fixture: ComponentFixture<MolassesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolassesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolassesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
