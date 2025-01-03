import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquordetaildescComponent } from './liquordetaildesc.component';

describe('LiquordetaildescComponent', () => {
  let component: LiquordetaildescComponent;
  let fixture: ComponentFixture<LiquordetaildescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquordetaildescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquordetaildescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
