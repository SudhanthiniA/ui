import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailbeerComponent } from './retailbeer.component';

describe('RetailbeerComponent', () => {
  let component: RetailbeerComponent;
  let fixture: ComponentFixture<RetailbeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailbeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailbeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
