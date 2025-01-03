import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd20Fl1Fl1aComponent } from './viewpd20-fl1-fl1a.component';

describe('Viewpd20Fl1Fl1aComponent', () => {
  let component: Viewpd20Fl1Fl1aComponent;
  let fixture: ComponentFixture<Viewpd20Fl1Fl1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd20Fl1Fl1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd20Fl1Fl1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
