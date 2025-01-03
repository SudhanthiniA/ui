import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandandlabeltrackingComponent } from './brandandlabeltracking.component';

describe('BrandandlabeltrackingComponent', () => {
  let component: BrandandlabeltrackingComponent;
  let fixture: ComponentFixture<BrandandlabeltrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandandlabeltrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandandlabeltrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
