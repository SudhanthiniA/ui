import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementfinishgoodparentunitComponent } from './movementfinishgoodparentunit.component';

describe('MovementfinishgoodparentunitComponent', () => {
  let component: MovementfinishgoodparentunitComponent;
  let fixture: ComponentFixture<MovementfinishgoodparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementfinishgoodparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementfinishgoodparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
