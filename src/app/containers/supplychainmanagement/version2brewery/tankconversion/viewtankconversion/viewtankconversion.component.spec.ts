import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtankconversionComponent } from './viewtankconversion.component';

describe('ViewtankconversionComponent', () => {
  let component: ViewtankconversionComponent;
  let fixture: ComponentFixture<ViewtankconversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtankconversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtankconversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
