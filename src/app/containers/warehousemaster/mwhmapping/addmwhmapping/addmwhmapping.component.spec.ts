import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmwhmappingComponent } from './addmwhmapping.component';

describe('AddmwhmappingComponent', () => {
  let component: AddmwhmappingComponent;
  let fixture: ComponentFixture<AddmwhmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmwhmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmwhmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
