import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb7formComponent } from './viewb7form.component';

describe('Viewb7formComponent', () => {
  let component: Viewb7formComponent;
  let fixture: ComponentFixture<Viewb7formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb7formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb7formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
