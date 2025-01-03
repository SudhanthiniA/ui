import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutetypeComponent } from './routetype.component';

describe('RoutetypeComponent', () => {
  let component: RoutetypeComponent;
  let fixture: ComponentFixture<RoutetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
