import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletcasecodeunmappingComponent } from './palletcasecodeunmapping.component';

describe('PalletcasecodeunmappingComponent', () => {
  let component: PalletcasecodeunmappingComponent;
  let fixture: ComponentFixture<PalletcasecodeunmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalletcasecodeunmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletcasecodeunmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
