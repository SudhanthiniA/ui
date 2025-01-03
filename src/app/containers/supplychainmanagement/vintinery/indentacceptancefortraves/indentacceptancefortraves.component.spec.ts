import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentacceptancefortravesComponent } from './indentacceptancefortraves.component';

describe('IndentacceptancefortravesComponent', () => {
  let component: IndentacceptancefortravesComponent;
  let fixture: ComponentFixture<IndentacceptancefortravesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentacceptancefortravesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentacceptancefortravesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
