import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubliquortypeComponent } from './addsubliquortype.component';

describe('AddsubliquortypeComponent', () => {
  let component: AddsubliquortypeComponent;
  let fixture: ComponentFixture<AddsubliquortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsubliquortypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsubliquortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
