import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinappticketComponent } from './addinappticket.component';

describe('AddinappticketComponent', () => {
  let component: AddinappticketComponent;
  let fixture: ComponentFixture<AddinappticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinappticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinappticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
