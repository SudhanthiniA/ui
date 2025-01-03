import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditMolassestypeComponent } from './addedit-molassestype.component';

describe('AddeditMolassestypeComponent', () => {
  let component: AddeditMolassestypeComponent;
  let fixture: ComponentFixture<AddeditMolassestypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditMolassestypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditMolassestypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
