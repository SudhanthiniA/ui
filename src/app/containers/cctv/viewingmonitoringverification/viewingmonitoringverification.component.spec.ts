import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingmonitoringverificationComponent } from './viewingmonitoringverification.component';

describe('ViewingmonitoringverificationComponent', () => {
  let component: ViewingmonitoringverificationComponent;
  let fixture: ComponentFixture<ViewingmonitoringverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewingmonitoringverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingmonitoringverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
