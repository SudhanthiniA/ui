import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl7aComponent } from './fl7a.component';

describe('Fl7aComponent', () => {
  let component: Fl7aComponent;
  let fixture: ComponentFixture<Fl7aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl7aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl7aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
