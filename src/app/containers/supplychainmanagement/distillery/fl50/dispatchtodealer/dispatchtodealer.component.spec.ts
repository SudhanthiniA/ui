import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchtodealerComponent } from './dispatchtodealer.component';

describe('DispatchtodealerComponent', () => {
  let component: DispatchtodealerComponent;
  let fixture: ComponentFixture<DispatchtodealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchtodealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchtodealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
