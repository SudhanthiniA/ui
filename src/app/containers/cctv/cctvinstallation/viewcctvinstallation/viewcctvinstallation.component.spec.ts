import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcctvinstallationComponent } from './viewcctvinstallation.component';

describe('ViewcctvinstallationComponent', () => {
  let component: ViewcctvinstallationComponent;
  let fixture: ComponentFixture<ViewcctvinstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcctvinstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcctvinstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
