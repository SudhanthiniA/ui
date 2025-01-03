import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpermitapplofnarcoticdrugComponent } from './importpermitapplofnarcoticdrug.component';

describe('ImportpermitapplofnarcoticdrugComponent', () => {
  let component: ImportpermitapplofnarcoticdrugComponent;
  let fixture: ComponentFixture<ImportpermitapplofnarcoticdrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportpermitapplofnarcoticdrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportpermitapplofnarcoticdrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
