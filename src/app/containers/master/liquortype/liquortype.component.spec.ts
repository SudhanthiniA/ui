import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquortypeComponent } from './liquortype.component';

describe('LiquortypeComponent', () => {
  let component: LiquortypeComponent;
  let fixture: ComponentFixture<LiquortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquortypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
