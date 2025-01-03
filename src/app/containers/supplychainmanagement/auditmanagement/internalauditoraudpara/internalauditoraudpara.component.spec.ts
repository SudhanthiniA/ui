import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalauditoraudparaComponent } from './internalauditoraudpara.component';

describe('InternalauditoraudparaComponent', () => {
  let component: InternalauditoraudparaComponent;
  let fixture: ComponentFixture<InternalauditoraudparaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalauditoraudparaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalauditoraudparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
