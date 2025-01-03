import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalebranddispatchfromunitComponent } from './salebranddispatchfromunit.component';

describe('SalebranddispatchfromunitComponent', () => {
  let component: SalebranddispatchfromunitComponent;
  let fixture: ComponentFixture<SalebranddispatchfromunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalebranddispatchfromunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalebranddispatchfromunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
