import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmwstockinComponent } from './addmwstockin.component';

describe('AddmwstockinComponent', () => {
  let component: AddmwstockinComponent;
  let fixture: ComponentFixture<AddmwstockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmwstockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmwstockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
