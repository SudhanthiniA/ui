import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestforethanalorderIDComponent } from './requestforethanalorder-id.component';

describe('RequestforethanalorderIDComponent', () => {
  let component: RequestforethanalorderIDComponent;
  let fixture: ComponentFixture<RequestforethanalorderIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestforethanalorderIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestforethanalorderIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
