import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FermenterprocessComponent } from './fermenterprocess.component';

describe('FermenterprocessComponent', () => {
  let component: FermenterprocessComponent;
  let fixture: ComponentFixture<FermenterprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FermenterprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FermenterprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
