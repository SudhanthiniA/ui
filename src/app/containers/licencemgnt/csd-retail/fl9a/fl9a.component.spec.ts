import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl9aComponent } from './fl9a.component';

describe('Fl9aComponent', () => {
  let component: Fl9aComponent;
  let fixture: ComponentFixture<Fl9aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl9aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl9aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
