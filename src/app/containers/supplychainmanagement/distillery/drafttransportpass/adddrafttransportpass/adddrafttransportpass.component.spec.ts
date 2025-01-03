import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddrafttransportpassComponent } from './adddrafttransportpass.component';

describe('AdddrafttransportpassComponent', () => {
  let component: AdddrafttransportpassComponent;
  let fixture: ComponentFixture<AdddrafttransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddrafttransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddrafttransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
