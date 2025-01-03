import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrequestfortpcancelationComponent } from './viewrequestfortpcancelation.component';

describe('ViewrequestfortpcancelationComponent', () => {
  let component: ViewrequestfortpcancelationComponent;
  let fixture: ComponentFixture<ViewrequestfortpcancelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrequestfortpcancelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrequestfortpcancelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
