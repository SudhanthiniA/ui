import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlicenserenewalComponent } from './viewlicenserenewal.component';

describe('ViewlicenserenewalComponent', () => {
  let component: ViewlicenserenewalComponent;
  let fixture: ComponentFixture<ViewlicenserenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlicenserenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlicenserenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
