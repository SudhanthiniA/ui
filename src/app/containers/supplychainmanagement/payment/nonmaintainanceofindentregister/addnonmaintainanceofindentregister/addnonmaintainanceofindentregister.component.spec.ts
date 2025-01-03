import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnonmaintainanceofindentregisterComponent } from './addnonmaintainanceofindentregister.component';

describe('AddnonmaintainanceofindentregisterComponent', () => {
  let component: AddnonmaintainanceofindentregisterComponent;
  let fixture: ComponentFixture<AddnonmaintainanceofindentregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnonmaintainanceofindentregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnonmaintainanceofindentregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
