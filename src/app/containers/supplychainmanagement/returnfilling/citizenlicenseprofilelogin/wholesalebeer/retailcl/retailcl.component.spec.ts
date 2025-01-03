import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailclComponent } from './retailcl.component';

describe('RetailclComponent', () => {
  let component: RetailclComponent;
  let fixture: ComponentFixture<RetailclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
