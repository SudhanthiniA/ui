import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmf7registerComponent } from './viewmf7register.component';

describe('Viewmf7registerComponent', () => {
  let component: Viewmf7registerComponent;
  let fixture: ComponentFixture<Viewmf7registerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmf7registerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmf7registerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
