import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailmstistnewComponent } from './retailmstistnew.component';

describe('RetailmstistnewComponent', () => {
  let component: RetailmstistnewComponent;
  let fixture: ComponentFixture<RetailmstistnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailmstistnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailmstistnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
