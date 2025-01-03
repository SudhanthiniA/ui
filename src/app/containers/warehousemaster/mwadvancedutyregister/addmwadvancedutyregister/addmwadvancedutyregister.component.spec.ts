import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmwadvancedutyregisterComponent } from './addmwadvancedutyregister.component';

describe('AddmwadvancedutyregisterComponent', () => {
  let component: AddmwadvancedutyregisterComponent;
  let fixture: ComponentFixture<AddmwadvancedutyregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmwadvancedutyregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmwadvancedutyregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
