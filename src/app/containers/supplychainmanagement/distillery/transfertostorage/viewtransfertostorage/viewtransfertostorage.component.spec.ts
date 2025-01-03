import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransfertostorageComponent } from './viewtransfertostorage.component';

describe('ViewtransfertostorageComponent', () => {
  let component: ViewtransfertostorageComponent;
  let fixture: ComponentFixture<ViewtransfertostorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransfertostorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransfertostorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
