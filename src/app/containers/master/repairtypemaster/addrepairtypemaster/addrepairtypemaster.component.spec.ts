import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrepairtypemasterComponent } from './addrepairtypemaster.component';

describe('AddrepairtypemasterComponent', () => {
  let component: AddrepairtypemasterComponent;
  let fixture: ComponentFixture<AddrepairtypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrepairtypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrepairtypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
