import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailmstistComponent } from './retailmstist.component';

describe('RetailmstistComponent', () => {
  let component: RetailmstistComponent;
  let fixture: ComponentFixture<RetailmstistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailmstistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailmstistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
