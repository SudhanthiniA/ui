import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransofspirittobottlingvatComponent } from './addtransofspirittobottlingvat.component';

describe('AddtransofspirittobottlingvatComponent', () => {
  let component: AddtransofspirittobottlingvatComponent;
  let fixture: ComponentFixture<AddtransofspirittobottlingvatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransofspirittobottlingvatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransofspirittobottlingvatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
