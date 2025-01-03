import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addflb9formComponent } from './addflb9form.component';

describe('Addflb9formComponent', () => {
  let component: Addflb9formComponent;
  let fixture: ComponentFixture<Addflb9formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addflb9formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addflb9formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
