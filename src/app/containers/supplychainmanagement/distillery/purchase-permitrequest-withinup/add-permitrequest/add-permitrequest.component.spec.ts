import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermitrequestComponent } from './add-permitrequest.component';

describe('AddPermitrequestComponent', () => {
  let component: AddPermitrequestComponent;
  let fixture: ComponentFixture<AddPermitrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPermitrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPermitrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
