import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlabeldesignComponent } from './addlabeldesign.component';

describe('AddlabeldesignComponent', () => {
  let component: AddlabeldesignComponent;
  let fixture: ComponentFixture<AddlabeldesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlabeldesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlabeldesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
