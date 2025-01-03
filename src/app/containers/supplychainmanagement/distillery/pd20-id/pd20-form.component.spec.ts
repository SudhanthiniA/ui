import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd20FormComponent } from './pd20-form.component';

describe('Pd20FormComponent', () => {
  let component: Pd20FormComponent;
  let fixture: ComponentFixture<Pd20FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd20FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd20FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
