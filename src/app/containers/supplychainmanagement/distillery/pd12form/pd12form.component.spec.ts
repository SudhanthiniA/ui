import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd12formComponent } from './pd12form.component';

describe('Pd12formComponent', () => {
  let component: Pd12formComponent;
  let fixture: ComponentFixture<Pd12formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd12formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd12formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
