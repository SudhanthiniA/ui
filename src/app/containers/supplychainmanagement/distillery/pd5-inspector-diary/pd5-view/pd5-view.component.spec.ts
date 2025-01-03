import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd5ViewComponent } from './pd5-view.component';

describe('Pd5ViewComponent', () => {
  let component: Pd5ViewComponent;
  let fixture: ComponentFixture<Pd5ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd5ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd5ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
