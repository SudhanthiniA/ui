import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrangemasterComponent } from './addrangemaster.component';

describe('AddrangemasterComponent', () => {
  let component: AddrangemasterComponent;
  let fixture: ComponentFixture<AddrangemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrangemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrangemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
