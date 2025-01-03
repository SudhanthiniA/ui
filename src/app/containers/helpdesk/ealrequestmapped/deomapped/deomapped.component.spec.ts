import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeomappedComponent } from './deomapped.component';

describe('DeomappedComponent', () => {
  let component: DeomappedComponent;
  let fixture: ComponentFixture<DeomappedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeomappedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeomappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
