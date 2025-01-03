import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl6newComponent } from './viewbwfl6new.component';

describe('Viewbwfl6newComponent', () => {
  let component: Viewbwfl6newComponent;
  let fixture: ComponentFixture<Viewbwfl6newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl6newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl6newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
