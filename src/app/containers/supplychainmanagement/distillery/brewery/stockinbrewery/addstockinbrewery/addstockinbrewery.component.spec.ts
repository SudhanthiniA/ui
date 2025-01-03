import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockinbreweryComponent } from './addstockinbrewery.component';

describe('AddstockinbreweryComponent', () => {
  let component: AddstockinbreweryComponent;
  let fixture: ComponentFixture<AddstockinbreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockinbreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockinbreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
