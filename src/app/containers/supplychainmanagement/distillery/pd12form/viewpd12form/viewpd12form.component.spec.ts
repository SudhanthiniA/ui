import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd12formComponent } from './viewpd12form.component';

describe('Viewpd12formComponent', () => {
  let component: Viewpd12formComponent;
  let fixture: ComponentFixture<Viewpd12formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd12formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd12formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
