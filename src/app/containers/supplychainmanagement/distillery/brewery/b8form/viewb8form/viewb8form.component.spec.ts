import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb8formComponent } from './viewb8form.component';

describe('Viewb8formComponent', () => {
  let component: Viewb8formComponent;
  let fixture: ComponentFixture<Viewb8formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb8formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb8formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
