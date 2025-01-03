import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonocartondispatchComponent } from './monocartondispatch.component';

describe('MonocartondispatchComponent', () => {
  let component: MonocartondispatchComponent;
  let fixture: ComponentFixture<MonocartondispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonocartondispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonocartondispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
