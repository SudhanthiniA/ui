import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalauditorComponent } from './internalauditor.component';

describe('InternalauditorComponent', () => {
  let component: InternalauditorComponent;
  let fixture: ComponentFixture<InternalauditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalauditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalauditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
