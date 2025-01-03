import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl11summaryComponent } from './fl11summary.component';

describe('Fl11summaryComponent', () => {
  let component: Fl11summaryComponent;
  let fixture: ComponentFixture<Fl11summaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl11summaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl11summaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
