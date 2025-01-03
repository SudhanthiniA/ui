import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftTpComponent } from './draft-tp.component';

describe('DraftTpComponent', () => {
  let component: DraftTpComponent;
  let fixture: ComponentFixture<DraftTpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftTpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
