import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewflb9formComponent } from './viewflb9form.component';

describe('Viewflb9formComponent', () => {
  let component: Viewflb9formComponent;
  let fixture: ComponentFixture<Viewflb9formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewflb9formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewflb9formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
