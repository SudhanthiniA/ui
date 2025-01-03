import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcartensComponent } from './addeditcartens.component';

describe('AddeditcartensComponent', () => {
  let component: AddeditcartensComponent;
  let fixture: ComponentFixture<AddeditcartensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditcartensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditcartensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
