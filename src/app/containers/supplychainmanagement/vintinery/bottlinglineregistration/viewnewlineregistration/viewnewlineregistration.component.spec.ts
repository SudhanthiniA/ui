import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnewlineregistrationComponent } from './viewnewlineregistration.component';

describe('ViewnewlineregistrationComponent', () => {
  let component: ViewnewlineregistrationComponent;
  let fixture: ComponentFixture<ViewnewlineregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnewlineregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnewlineregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
