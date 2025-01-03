import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrolloverstockComponent } from './addrolloverstock.component';

describe('AddrolloverstockComponent', () => {
  let component: AddrolloverstockComponent;
  let fixture: ComponentFixture<AddrolloverstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrolloverstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrolloverstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
