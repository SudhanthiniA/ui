import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtankrepairComponent } from './addtankrepair.component';

describe('AddtankrepairComponent', () => {
  let component: AddtankrepairComponent;
  let fixture: ComponentFixture<AddtankrepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtankrepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtankrepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
