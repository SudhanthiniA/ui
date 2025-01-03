import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppublicservicetribunalcaseComponent } from './uppublicservicetribunalcase.component';

describe('UppublicservicetribunalcaseComponent', () => {
  let component: UppublicservicetribunalcaseComponent;
  let fixture: ComponentFixture<UppublicservicetribunalcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppublicservicetribunalcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppublicservicetribunalcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
