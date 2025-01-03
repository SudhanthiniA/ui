import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditMf5part2Component } from './addedit-mf5part2.component';

describe('AddeditMf5part2Component', () => {
  let component: AddeditMf5part2Component;
  let fixture: ComponentFixture<AddeditMf5part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditMf5part2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditMf5part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
