import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd10formComponent } from './addpd10form.component';

describe('Addpd10formComponent', () => {
  let component: Addpd10formComponent;
  let fixture: ComponentFixture<Addpd10formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd10formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd10formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
