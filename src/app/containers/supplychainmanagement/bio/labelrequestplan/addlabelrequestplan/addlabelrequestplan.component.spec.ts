import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlabelrequestplanComponent } from './addlabelrequestplan.component';

describe('AddlabelrequestplanComponent', () => {
  let component: AddlabelrequestplanComponent;
  let fixture: ComponentFixture<AddlabelrequestplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlabelrequestplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlabelrequestplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
