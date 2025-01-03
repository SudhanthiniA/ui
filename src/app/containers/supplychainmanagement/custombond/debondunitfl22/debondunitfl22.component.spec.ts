import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Debondunitfl22Component } from './debondunitfl22.component';

describe('Debondunitfl22Component', () => {
  let component: Debondunitfl22Component;
  let fixture: ComponentFixture<Debondunitfl22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Debondunitfl22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Debondunitfl22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
