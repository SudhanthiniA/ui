import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd25ViewComponent } from './pd25-view.component';

describe('Pd25ViewComponent', () => {
  let component: Pd25ViewComponent;
  let fixture: ComponentFixture<Pd25ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd25ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd25ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
