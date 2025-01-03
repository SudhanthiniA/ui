import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcotregisterComponent } from './addcotregister.component';

describe('AddcotregisterComponent', () => {
  let component: AddcotregisterComponent;
  let fixture: ComponentFixture<AddcotregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcotregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcotregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
