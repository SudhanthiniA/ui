import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd20Fl1Fl1aComponent } from './addpd20-fl1-fl1a.component';

describe('Addpd20Fl1Fl1aComponent', () => {
  let component: Addpd20Fl1Fl1aComponent;
  let fixture: ComponentFixture<Addpd20Fl1Fl1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd20Fl1Fl1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd20Fl1Fl1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
