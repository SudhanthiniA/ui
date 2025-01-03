import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbreakagefeesComponent } from './viewbreakagefees.component';

describe('ViewbreakagefeesComponent', () => {
  let component: ViewbreakagefeesComponent;
  let fixture: ComponentFixture<ViewbreakagefeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbreakagefeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbreakagefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
