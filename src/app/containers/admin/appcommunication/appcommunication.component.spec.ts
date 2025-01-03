import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcommunicationComponent } from './appcommunication.component';

describe('AppcommunicationComponent', () => {
  let component: AppcommunicationComponent;
  let fixture: ComponentFixture<AppcommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
