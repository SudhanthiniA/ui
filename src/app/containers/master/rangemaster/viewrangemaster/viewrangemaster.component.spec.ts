import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrangemasterComponent } from './viewrangemaster.component';

describe('ViewrangemasterComponent', () => {
  let component: ViewrangemasterComponent;
  let fixture: ComponentFixture<ViewrangemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrangemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrangemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
