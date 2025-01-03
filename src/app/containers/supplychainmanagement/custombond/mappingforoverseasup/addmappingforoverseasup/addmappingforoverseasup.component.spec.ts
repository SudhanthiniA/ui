import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmappingforoverseasupComponent } from './addmappingforoverseasup.component';

describe('AddmappingforoverseasupComponent', () => {
  let component: AddmappingforoverseasupComponent;
  let fixture: ComponentFixture<AddmappingforoverseasupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmappingforoverseasupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmappingforoverseasupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
