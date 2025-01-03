import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquorsubtypeComponent } from './liquorsubtype.component';

describe('LiquorsubtypeComponent', () => {
  let component: LiquorsubtypeComponent;
  let fixture: ComponentFixture<LiquorsubtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquorsubtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquorsubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
