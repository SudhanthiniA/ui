import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebarapplComponent } from './homebarappl.component';

describe('HomebarapplComponent', () => {
  let component: HomebarapplComponent;
  let fixture: ComponentFixture<HomebarapplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebarapplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebarapplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
