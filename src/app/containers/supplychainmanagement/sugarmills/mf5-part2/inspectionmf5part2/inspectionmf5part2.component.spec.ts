import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inspectionmf5part2Component } from './inspectionmf5part2.component';

describe('Inspectionmf5part2Component', () => {
  let component: Inspectionmf5part2Component;
  let fixture: ComponentFixture<Inspectionmf5part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inspectionmf5part2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inspectionmf5part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
