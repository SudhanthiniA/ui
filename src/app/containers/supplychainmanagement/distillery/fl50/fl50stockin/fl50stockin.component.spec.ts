import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl50stockinComponent } from './fl50stockin.component';

describe('Fl50stockinComponent', () => {
  let component: Fl50stockinComponent;
  let fixture: ComponentFixture<Fl50stockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl50stockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl50stockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
