import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransportpasstypeComponent } from './addtransportpasstype.component';

describe('AddtransportpasstypeComponent', () => {
  let component: AddtransportpasstypeComponent;
  let fixture: ComponentFixture<AddtransportpasstypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransportpasstypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransportpasstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
