import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd20FormComponent } from './addpd20-form.component';

describe('Addpd20FormComponent', () => {
  let component: Addpd20FormComponent;
  let fixture: ComponentFixture<Addpd20FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd20FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd20FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
