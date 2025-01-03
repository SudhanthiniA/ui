import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprocessingwastageComponent } from './addprocessingwastage.component';

describe('AddprocessingwastageComponent', () => {
  let component: AddprocessingwastageComponent;
  let fixture: ComponentFixture<AddprocessingwastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprocessingwastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprocessingwastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
