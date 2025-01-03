import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinstallationandverificationComponent } from './viewinstallationandverification.component';

describe('ViewinstallationandverificationComponent', () => {
  let component: ViewinstallationandverificationComponent;
  let fixture: ComponentFixture<ViewinstallationandverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewinstallationandverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinstallationandverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
