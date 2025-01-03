import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendingprocessComponent } from './blendingprocess.component';

describe('BlendingprocessComponent', () => {
  let component: BlendingprocessComponent;
  let fixture: ComponentFixture<BlendingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
