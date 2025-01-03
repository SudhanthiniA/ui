import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd20FormComponent } from './viewpd20-form.component';

describe('Viewpd20FormComponent', () => {
  let component: Viewpd20FormComponent;
  let fixture: ComponentFixture<Viewpd20FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd20FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd20FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
