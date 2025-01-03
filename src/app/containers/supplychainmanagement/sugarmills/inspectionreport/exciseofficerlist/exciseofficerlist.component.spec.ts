import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExciseofficerlistComponent } from './exciseofficerlist.component';

describe('ExciseofficerlistComponent', () => {
  let component: ExciseofficerlistComponent;
  let fixture: ComponentFixture<ExciseofficerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExciseofficerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExciseofficerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
