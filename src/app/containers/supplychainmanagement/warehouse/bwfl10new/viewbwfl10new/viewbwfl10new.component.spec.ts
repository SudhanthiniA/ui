import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl10newComponent } from './viewbwfl10new.component';

describe('Viewbwfl10newComponent', () => {
  let component: Viewbwfl10newComponent;
  let fixture: ComponentFixture<Viewbwfl10newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl10newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl10newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
