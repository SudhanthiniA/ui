import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransofspirittoclflblendingvatComponent } from './addtransofspirittoclflblendingvat.component';

describe('AddtransofspirittoclflblendingvatComponent', () => {
  let component: AddtransofspirittoclflblendingvatComponent;
  let fixture: ComponentFixture<AddtransofspirittoclflblendingvatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransofspirittoclflblendingvatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransofspirittoclflblendingvatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
