import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf7registerComponent } from './mf7register.component';

describe('Mf7registerComponent', () => {
  let component: Mf7registerComponent;
  let fixture: ComponentFixture<Mf7registerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf7registerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf7registerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
