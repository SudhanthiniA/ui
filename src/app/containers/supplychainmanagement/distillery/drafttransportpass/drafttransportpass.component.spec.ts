import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrafttransportpassComponent } from './drafttransportpass.component';

describe('DrafttransportpassComponent', () => {
  let component: DrafttransportpassComponent;
  let fixture: ComponentFixture<DrafttransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrafttransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrafttransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
