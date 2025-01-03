import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmwtranspasscanmodComponent } from './addmwtranspasscanmod.component';

describe('AddmwtranspasscanmodComponent', () => {
  let component: AddmwtranspasscanmodComponent;
  let fixture: ComponentFixture<AddmwtranspasscanmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmwtranspasscanmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmwtranspasscanmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
