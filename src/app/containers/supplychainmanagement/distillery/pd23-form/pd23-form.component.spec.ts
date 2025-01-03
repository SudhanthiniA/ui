import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd23FormComponent } from './pd23-form.component';

describe('Pd23FormComponent', () => {
  let component: Pd23FormComponent;
  let fixture: ComponentFixture<Pd23FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd23FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd23FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
