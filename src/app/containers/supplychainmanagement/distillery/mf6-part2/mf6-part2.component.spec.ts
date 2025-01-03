import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf6Part2Component } from './mf6-part2.component';

describe('Mf6Part2Component', () => {
  let component: Mf6Part2Component;
  let fixture: ComponentFixture<Mf6Part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf6Part2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf6Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
