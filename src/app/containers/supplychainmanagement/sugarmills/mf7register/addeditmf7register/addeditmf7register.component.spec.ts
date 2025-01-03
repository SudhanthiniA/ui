import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addeditmf7registerComponent } from './addeditmf7register.component';

describe('Addeditmf7registerComponent', () => {
  let component: Addeditmf7registerComponent;
  let fixture: ComponentFixture<Addeditmf7registerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addeditmf7registerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addeditmf7registerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
