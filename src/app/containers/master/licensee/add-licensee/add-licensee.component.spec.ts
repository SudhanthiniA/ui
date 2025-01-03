import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLicenseeComponent } from './add-licensee.component';

describe('AddLicenseeComponent', () => {
  let component: AddLicenseeComponent;
  let fixture: ComponentFixture<AddLicenseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLicenseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLicenseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
