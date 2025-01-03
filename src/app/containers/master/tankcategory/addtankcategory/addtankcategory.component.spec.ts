import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtankcategoryComponent } from './addtankcategory.component';

describe('AddtankcategoryComponent', () => {
  let component: AddtankcategoryComponent;
  let fixture: ComponentFixture<AddtankcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtankcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtankcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
