import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportpermitapplofnarcoticdrugComponent } from './exportpermitapplofnarcoticdrug.component';

describe('ExportpermitapplofnarcoticdrugComponent', () => {
  let component: ExportpermitapplofnarcoticdrugComponent;
  let fixture: ComponentFixture<ExportpermitapplofnarcoticdrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportpermitapplofnarcoticdrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportpermitapplofnarcoticdrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
