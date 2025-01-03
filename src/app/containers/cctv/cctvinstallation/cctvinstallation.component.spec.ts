import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvinstallationComponent } from './cctvinstallation.component';

describe('CctvinstallationComponent', () => {
  let component: CctvinstallationComponent;
  let fixture: ComponentFixture<CctvinstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CctvinstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CctvinstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
