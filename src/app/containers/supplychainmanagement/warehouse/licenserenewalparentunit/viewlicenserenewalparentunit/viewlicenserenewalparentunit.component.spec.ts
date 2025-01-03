import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlicenserenewalparentunitComponent } from './viewlicenserenewalparentunit.component';

describe('ViewlicenserenewalparentunitComponent', () => {
  let component: ViewlicenserenewalparentunitComponent;
  let fixture: ComponentFixture<ViewlicenserenewalparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlicenserenewalparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlicenserenewalparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
