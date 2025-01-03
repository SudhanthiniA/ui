import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditregesterComponent } from './editregester.component';

describe('EditregesterComponent', () => {
  let component: EditregesterComponent;
  let fixture: ComponentFixture<EditregesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditregesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditregesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
