import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmaintenancetypemasterComponent } from './addmaintenancetypemaster.component';

describe('AddmaintenancetypemasterComponent', () => {
  let component: AddmaintenancetypemasterComponent;
  let fixture: ComponentFixture<AddmaintenancetypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmaintenancetypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmaintenancetypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
