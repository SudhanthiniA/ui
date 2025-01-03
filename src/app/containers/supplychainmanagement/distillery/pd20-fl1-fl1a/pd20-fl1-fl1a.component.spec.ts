import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd20Fl1Fl1aComponent } from './pd20-fl1-fl1a.component';

describe('Pd20Fl1Fl1aComponent', () => {
  let component: Pd20Fl1Fl1aComponent;
  let fixture: ComponentFixture<Pd20Fl1Fl1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd20Fl1Fl1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd20Fl1Fl1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
