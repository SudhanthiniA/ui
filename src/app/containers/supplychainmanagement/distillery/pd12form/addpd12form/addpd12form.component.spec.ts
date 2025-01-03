import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd12formComponent } from './addpd12form.component';

describe('Addpd12formComponent', () => {
  let component: Addpd12formComponent;
  let fixture: ComponentFixture<Addpd12formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd12formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd12formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
