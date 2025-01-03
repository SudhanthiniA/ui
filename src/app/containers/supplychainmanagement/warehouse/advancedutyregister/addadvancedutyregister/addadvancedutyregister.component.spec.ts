import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadvancedutyregisterComponent } from './addadvancedutyregister.component';

describe('AddadvancedutyregisterComponent', () => {
  let component: AddadvancedutyregisterComponent;
  let fixture: ComponentFixture<AddadvancedutyregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadvancedutyregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadvancedutyregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
