import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl4newComponent } from './viewbwfl4new.component';

describe('Viewbwfl4newComponent', () => {
  let component: Viewbwfl4newComponent;
  let fixture: ComponentFixture<Viewbwfl4newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl4newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl4newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
