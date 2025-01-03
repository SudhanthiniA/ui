import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlicensetenureComponent } from './viewlicensetenure.component';

describe('ViewlicensetenureComponent', () => {
  let component: ViewlicensetenureComponent;
  let fixture: ComponentFixture<ViewlicensetenureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlicensetenureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlicensetenureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
