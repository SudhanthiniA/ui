import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletcasecodemappingComponent } from './palletcasecodemapping.component';

describe('PalletcasecodemappingComponent', () => {
  let component: PalletcasecodemappingComponent;
  let fixture: ComponentFixture<PalletcasecodemappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalletcasecodemappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletcasecodemappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
