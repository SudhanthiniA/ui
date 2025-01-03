import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailbrandwiselistComponent } from './retailbrandwiselist.component';

describe('RetailbrandwiselistComponent', () => {
  let component: RetailbrandwiselistComponent;
  let fixture: ComponentFixture<RetailbrandwiselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailbrandwiselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailbrandwiselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
