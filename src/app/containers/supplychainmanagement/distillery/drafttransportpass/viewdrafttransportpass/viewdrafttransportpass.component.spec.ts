import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdrafttransportpassComponent } from './viewdrafttransportpass.component';

describe('ViewdrafttransportpassComponent', () => {
  let component: ViewdrafttransportpassComponent;
  let fixture: ComponentFixture<ViewdrafttransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdrafttransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdrafttransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
