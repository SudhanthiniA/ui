import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquormasterComponent } from './liquormaster.component';

describe('LiquormasterComponent', () => {
  let component: LiquormasterComponent;
  let fixture: ComponentFixture<LiquormasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquormasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquormasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
