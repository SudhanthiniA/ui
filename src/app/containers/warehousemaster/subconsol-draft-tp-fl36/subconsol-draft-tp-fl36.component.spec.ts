import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubconsolDraftTpFl36Component } from './subconsol-draft-tp-fl36.component';

describe('SubconsolDraftTpFl36Component', () => {
  let component: SubconsolDraftTpFl36Component;
  let fixture: ComponentFixture<SubconsolDraftTpFl36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubconsolDraftTpFl36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubconsolDraftTpFl36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
