import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoremasterComponent } from './vendorregistration.component';

describe('StoremasterComponent', () => {
  let component: StoremasterComponent;
  let fixture: ComponentFixture<StoremasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoremasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoremasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
