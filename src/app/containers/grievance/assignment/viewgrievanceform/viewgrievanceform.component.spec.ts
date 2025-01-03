import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgrievanceformComponent } from './viewgrievanceform.component';

describe('ViewgrievanceformComponent', () => {
  let component: ViewgrievanceformComponent;
  let fixture: ComponentFixture<ViewgrievanceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgrievanceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgrievanceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
