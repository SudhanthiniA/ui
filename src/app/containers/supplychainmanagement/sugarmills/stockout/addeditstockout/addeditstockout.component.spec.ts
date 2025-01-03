import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditstockoutComponent } from './addeditstockout.component';

describe('AddeditstockoutComponent', () => {
  let component: AddeditstockoutComponent;
  let fixture: ComponentFixture<AddeditstockoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditstockoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditstockoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
