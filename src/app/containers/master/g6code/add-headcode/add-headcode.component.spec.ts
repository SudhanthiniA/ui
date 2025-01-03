import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeadcodeComponent } from './add-headcode.component';

describe('AddHeadcodeComponent', () => {
  let component: AddHeadcodeComponent;
  let fixture: ComponentFixture<AddHeadcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHeadcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeadcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
