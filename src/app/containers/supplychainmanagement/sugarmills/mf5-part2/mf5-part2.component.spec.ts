import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf5Part2Component } from './mf5-part2.component';

describe('Mf5Part2Component', () => {
  let component: Mf5Part2Component;
  let fixture: ComponentFixture<Mf5Part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf5Part2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf5Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
