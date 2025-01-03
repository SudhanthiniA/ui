import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addg6registerComponent } from './addg6register.component';

describe('Addg6registerComponent', () => {
  let component: Addg6registerComponent;
  let fixture: ComponentFixture<Addg6registerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addg6registerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addg6registerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
