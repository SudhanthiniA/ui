import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorderrequestComponent } from './editorderrequest.component';

describe('EditorderrequestComponent', () => {
  let component: EditorderrequestComponent;
  let fixture: ComponentFixture<EditorderrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorderrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorderrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
