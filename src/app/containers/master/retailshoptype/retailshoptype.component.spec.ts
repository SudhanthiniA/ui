import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailshoptypeComponent } from './retailshoptype.component';

describe('RetailshoptypeComponent', () => {
  let component: RetailshoptypeComponent;
  let fixture: ComponentFixture<RetailshoptypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailshoptypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailshoptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
