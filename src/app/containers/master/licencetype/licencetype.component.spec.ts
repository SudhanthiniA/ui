import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencetypeComponent } from './licencetype.component';

describe('LicencetypeComponent', () => {
  let component: LicencetypeComponent;
  let fixture: ComponentFixture<LicencetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicencetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicencetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
