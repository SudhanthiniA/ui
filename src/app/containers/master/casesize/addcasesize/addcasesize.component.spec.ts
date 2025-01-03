import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcasesizeComponent } from './addcasesize.component';

describe('AddcasesizeComponent', () => {
  let component: AddcasesizeComponent;
  let fixture: ComponentFixture<AddcasesizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcasesizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcasesizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
