import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedittransportgenerationComponent } from './addedittransportgeneration.component';

describe('AddedittransportgenerationComponent', () => {
  let component: AddedittransportgenerationComponent;
  let fixture: ComponentFixture<AddedittransportgenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedittransportgenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedittransportgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
