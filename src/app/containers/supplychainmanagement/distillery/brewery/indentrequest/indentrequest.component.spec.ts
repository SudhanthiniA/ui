import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentrequestComponent } from './indentrequest.component';

describe('IndentrequestComponent', () => {
  let component: IndentrequestComponent;
  let fixture: ComponentFixture<IndentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
