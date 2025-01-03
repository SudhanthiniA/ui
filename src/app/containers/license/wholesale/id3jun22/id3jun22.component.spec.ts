import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id3jun22Component } from './id3jun22.component';

describe('Id3jun22Component', () => {
  let component: Id3jun22Component;
  let fixture: ComponentFixture<Id3jun22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id3jun22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id3jun22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
