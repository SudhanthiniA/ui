import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlinglineoverviewComponent } from './bottlinglineoverview.component';

describe('BottlinglineoverviewComponent', () => {
  let component: BottlinglineoverviewComponent;
  let fixture: ComponentFixture<BottlinglineoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlinglineoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlinglineoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
