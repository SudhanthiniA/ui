import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentallocatedComponent } from './indentallocated.component';

describe('IndentallocatedComponent', () => {
  let component: IndentallocatedComponent;
  let fixture: ComponentFixture<IndentallocatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentallocatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentallocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
