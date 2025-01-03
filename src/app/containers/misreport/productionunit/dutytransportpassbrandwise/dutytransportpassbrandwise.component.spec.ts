import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutytransportpassbrandwiseComponent } from './dutytransportpassbrandwise.component';

describe('DutytransportpassbrandwiseComponent', () => {
  let component: DutytransportpassbrandwiseComponent;
  let fixture: ComponentFixture<DutytransportpassbrandwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutytransportpassbrandwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutytransportpassbrandwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
