import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutemasterComponent } from './routemaster.component';

describe('RoutemasterComponent', () => {
  let component: RoutemasterComponent;
  let fixture: ComponentFixture<RoutemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
