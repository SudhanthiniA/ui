import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockinomdComponent } from './addstockinomd.component';

describe('AddstockinomdComponent', () => {
  let component: AddstockinomdComponent;
  let fixture: ComponentFixture<AddstockinomdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockinomdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockinomdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
