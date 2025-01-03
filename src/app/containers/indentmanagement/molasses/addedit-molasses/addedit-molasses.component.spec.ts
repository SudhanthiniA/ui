import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditMolassesComponent } from './addedit-molasses.component';

describe('AddeditMolassesComponent', () => {
  let component: AddeditMolassesComponent;
  let fixture: ComponentFixture<AddeditMolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditMolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditMolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
