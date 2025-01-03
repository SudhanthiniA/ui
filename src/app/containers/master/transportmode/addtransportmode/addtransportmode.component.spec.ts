import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransportmodeComponent } from './addtransportmode.component';

describe('AddtransportmodeComponent', () => {
  let component: AddtransportmodeComponent;
  let fixture: ComponentFixture<AddtransportmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransportmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransportmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
