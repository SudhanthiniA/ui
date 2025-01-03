import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvearseasgatepassComponent } from './ovearseasgatepass.component';

describe('OvearseasgatepassComponent', () => {
  let component: OvearseasgatepassComponent;
  let fixture: ComponentFixture<OvearseasgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvearseasgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvearseasgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
