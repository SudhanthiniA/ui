import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flb9formComponent } from './flb9form.component';

describe('Flb9formComponent', () => {
  let component: Flb9formComponent;
  let fixture: ComponentFixture<Flb9formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flb9formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flb9formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
