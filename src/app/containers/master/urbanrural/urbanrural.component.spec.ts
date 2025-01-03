import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanruralComponent } from './urbanrural.component';

describe('UrbanruralComponent', () => {
  let component: UrbanruralComponent;
  let fixture: ComponentFixture<UrbanruralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanruralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanruralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
