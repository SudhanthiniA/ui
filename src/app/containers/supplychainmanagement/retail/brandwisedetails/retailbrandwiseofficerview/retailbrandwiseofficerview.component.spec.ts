import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailbrandwiseofficerviewComponent } from './retailbrandwiseofficerview.component';

describe('RetailbrandwiseofficerviewComponent', () => {
  let component: RetailbrandwiseofficerviewComponent;
  let fixture: ComponentFixture<RetailbrandwiseofficerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailbrandwiseofficerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailbrandwiseofficerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
