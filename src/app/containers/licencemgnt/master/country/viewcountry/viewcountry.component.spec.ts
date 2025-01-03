import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcountryComponent } from './viewcountry.component';

describe('ViewcountryComponent', () => {
  let component: ViewcountryComponent;
  let fixture: ComponentFixture<ViewcountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
