import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreturnassetComponent } from './addreturnasset.component';

describe('AddreturnassetComponent', () => {
  let component: AddreturnassetComponent;
  let fixture: ComponentFixture<AddreturnassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreturnassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreturnassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
