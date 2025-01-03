import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl7cComponent } from './fl7c.component';

describe('Fl7cComponent', () => {
  let component: Fl7cComponent;
  let fixture: ComponentFixture<Fl7cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl7cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl7cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
