import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewviewingmonitoringverificationComponent } from './viewviewingmonitoringverification.component';

describe('ViewviewingmonitoringverificationComponent', () => {
  let component: ViewviewingmonitoringverificationComponent;
  let fixture: ComponentFixture<ViewviewingmonitoringverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewviewingmonitoringverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewviewingmonitoringverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
