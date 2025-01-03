import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl9newComponent } from './viewbwfl9new.component';

describe('Viewbwfl9newComponent', () => {
  let component: Viewbwfl9newComponent;
  let fixture: ComponentFixture<Viewbwfl9newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl9newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl9newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
