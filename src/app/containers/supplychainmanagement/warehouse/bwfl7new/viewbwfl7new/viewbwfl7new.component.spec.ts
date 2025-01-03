import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl7newComponent } from './viewbwfl7new.component';

describe('Viewbwfl7newComponent', () => {
  let component: Viewbwfl7newComponent;
  let fixture: ComponentFixture<Viewbwfl7newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl7newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl7newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
