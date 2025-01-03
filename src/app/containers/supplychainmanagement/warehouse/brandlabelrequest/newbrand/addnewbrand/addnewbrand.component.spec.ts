import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbrandComponent } from './addnewbrand.component';

describe('AddnewbrandComponent', () => {
  let component: AddnewbrandComponent;
  let fixture: ComponentFixture<AddnewbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
