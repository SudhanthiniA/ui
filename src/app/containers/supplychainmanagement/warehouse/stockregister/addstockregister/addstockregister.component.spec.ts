import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockregisterComponent } from './addstockregister.component';

describe('AddstockregisterComponent', () => {
  let component: AddstockregisterComponent;
  let fixture: ComponentFixture<AddstockregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
