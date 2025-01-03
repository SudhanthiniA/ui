import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblendingproductionplanComponent } from './addblendingproductionplan.component';

describe('AddblendingproductionplanComponent', () => {
  let component: AddblendingproductionplanComponent;
  let fixture: ComponentFixture<AddblendingproductionplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddblendingproductionplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddblendingproductionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
