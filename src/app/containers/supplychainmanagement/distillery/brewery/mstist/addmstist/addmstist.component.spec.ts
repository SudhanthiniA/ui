import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmstistComponent } from './addmstist.component';

describe('AddmstistComponent', () => {
  let component: AddmstistComponent;
  let fixture: ComponentFixture<AddmstistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmstistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmstistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
