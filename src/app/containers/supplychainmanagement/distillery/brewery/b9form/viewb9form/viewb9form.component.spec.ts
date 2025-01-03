import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb9formComponent } from './viewb9form.component';

describe('Viewb9formComponent', () => {
  let component: Viewb9formComponent;
  let fixture: ComponentFixture<Viewb9formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb9formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb9formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
