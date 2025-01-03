import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl22importpermitComponent } from './fl22importpermit.component';

describe('Fl22importpermitComponent', () => {
  let component: Fl22importpermitComponent;
  let fixture: ComponentFixture<Fl22importpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl22importpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl22importpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
