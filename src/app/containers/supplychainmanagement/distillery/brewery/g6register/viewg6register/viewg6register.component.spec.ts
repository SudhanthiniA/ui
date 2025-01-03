import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewg6registerComponent } from './viewg6register.component';

describe('Viewg6registerComponent', () => {
  let component: Viewg6registerComponent;
  let fixture: ComponentFixture<Viewg6registerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewg6registerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewg6registerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
