import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd10formComponent } from './viewpd10form.component';

describe('Viewpd10formComponent', () => {
  let component: Viewpd10formComponent;
  let fixture: ComponentFixture<Viewpd10formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd10formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd10formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
