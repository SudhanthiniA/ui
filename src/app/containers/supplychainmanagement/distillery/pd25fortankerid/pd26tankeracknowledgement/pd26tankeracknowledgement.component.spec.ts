import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd26tankeracknowledgementComponent } from './pd26tankeracknowledgement.component';

describe('Pd26tankeracknowledgementComponent', () => {
  let component: Pd26tankeracknowledgementComponent;
  let fixture: ComponentFixture<Pd26tankeracknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd26tankeracknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd26tankeracknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
