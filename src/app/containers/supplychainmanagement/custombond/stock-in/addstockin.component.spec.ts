import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockinComponent } from './addstockin.component';

describe('AddstockinComponent', () => {
  let component: AddstockinComponent;
  let fixture: ComponentFixture<AddstockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
