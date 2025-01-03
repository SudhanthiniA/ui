import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTankCoverTypeComponent } from './add-tank-cover-type.component';

describe('AddTankCoverTypeComponent', () => {
  let component: AddTankCoverTypeComponent;
  let fixture: ComponentFixture<AddTankCoverTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTankCoverTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTankCoverTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
