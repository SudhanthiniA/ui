import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationandverificationComponent } from './installationandverification.component';

describe('InstallationandverificationComponent', () => {
  let component: InstallationandverificationComponent;
  let fixture: ComponentFixture<InstallationandverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationandverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationandverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
