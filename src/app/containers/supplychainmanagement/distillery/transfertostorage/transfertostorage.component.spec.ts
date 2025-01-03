import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertostorageComponent } from './transfertostorage.component';

describe('TransfertostorageComponent', () => {
  let component: TransfertostorageComponent;
  let fixture: ComponentFixture<TransfertostorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfertostorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertostorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
