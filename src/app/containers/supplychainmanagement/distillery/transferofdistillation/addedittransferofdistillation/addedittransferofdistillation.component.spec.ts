import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedittransferofdistillationComponent } from './addedittransferofdistillation.component';

describe('AddedittransferofdistillationComponent', () => {
  let component: AddedittransferofdistillationComponent;
  let fixture: ComponentFixture<AddedittransferofdistillationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedittransferofdistillationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedittransferofdistillationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
