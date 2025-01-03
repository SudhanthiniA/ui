import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchaserComponent } from './addpurchaser.component';

describe('AddpurchaserComponent', () => {
  let component: AddpurchaserComponent;
  let fixture: ComponentFixture<AddpurchaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpurchaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpurchaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
