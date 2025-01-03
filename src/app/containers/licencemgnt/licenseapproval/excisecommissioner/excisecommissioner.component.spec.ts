import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcisecommissionerComponent } from './excisecommissioner.component';

describe('ExcisecommissionerComponent', () => {
  let component: ExcisecommissionerComponent;
  let fixture: ComponentFixture<ExcisecommissionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcisecommissionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcisecommissionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
