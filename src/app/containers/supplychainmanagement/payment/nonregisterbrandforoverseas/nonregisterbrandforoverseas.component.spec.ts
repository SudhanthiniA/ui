import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonregisterbrandforoverseasComponent } from './nonregisterbrandforoverseas.component';

describe('NonregisterbrandforoverseasComponent', () => {
  let component: NonregisterbrandforoverseasComponent;
  let fixture: ComponentFixture<NonregisterbrandforoverseasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonregisterbrandforoverseasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonregisterbrandforoverseasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
