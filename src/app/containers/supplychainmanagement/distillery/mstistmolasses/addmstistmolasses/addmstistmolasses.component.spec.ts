import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmstistmolassesComponent } from './addmstistmolasses.component';

describe('AddmstistmolassesComponent', () => {
  let component: AddmstistmolassesComponent;
  let fixture: ComponentFixture<AddmstistmolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmstistmolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmstistmolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
