import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd11RegisterOfIssuespiritComponent } from './pd11-register-of-issuespirit.component';

describe('Pd11RegisterOfIssuespiritComponent', () => {
  let component: Pd11RegisterOfIssuespiritComponent;
  let fixture: ComponentFixture<Pd11RegisterOfIssuespiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd11RegisterOfIssuespiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd11RegisterOfIssuespiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
