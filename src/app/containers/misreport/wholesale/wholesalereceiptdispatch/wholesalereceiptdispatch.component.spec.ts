import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalereceiptdispatchComponent } from './wholesalereceiptdispatch.component';

describe('WholesalereceiptdispatchComponent', () => {
  let component: WholesalereceiptdispatchComponent;
  let fixture: ComponentFixture<WholesalereceiptdispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalereceiptdispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalereceiptdispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
