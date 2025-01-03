import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtranspassmasterwarehouseComponent } from './addtranspassmasterwarehouse.component';

describe('AddtranspassmasterwarehouseComponent', () => {
  let component: AddtranspassmasterwarehouseComponent;
  let fixture: ComponentFixture<AddtranspassmasterwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtranspassmasterwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtranspassmasterwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
