import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakagefeesComponent } from './breakagefees.component';

describe('BreakagefeesComponent', () => {
  let component: BreakagefeesComponent;
  let fixture: ComponentFixture<BreakagefeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakagefeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakagefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
