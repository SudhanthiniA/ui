import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransfertostorageComponent } from './addtransfertostorage.component';

describe('AddtransfertostorageComponent', () => {
  let component: AddtransfertostorageComponent;
  let fixture: ComponentFixture<AddtransfertostorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransfertostorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransfertostorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
