import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewealrequestComponent } from './newealrequest.component';

describe('NewealrequestComponent', () => {
  let component: NewealrequestComponent;
  let fixture: ComponentFixture<NewealrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewealrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewealrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
