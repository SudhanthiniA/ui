import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcartensComponent } from './viewcartens.component';

describe('ViewcartensComponent', () => {
  let component: ViewcartensComponent;
  let fixture: ComponentFixture<ViewcartensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcartensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcartensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
