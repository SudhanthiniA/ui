import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl2a2b2c2dComponent } from './viewbwfl2a2b2c2d.component';

describe('Viewbwfl2a2b2c2dComponent', () => {
  let component: Viewbwfl2a2b2c2dComponent;
  let fixture: ComponentFixture<Viewbwfl2a2b2c2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl2a2b2c2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl2a2b2c2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
