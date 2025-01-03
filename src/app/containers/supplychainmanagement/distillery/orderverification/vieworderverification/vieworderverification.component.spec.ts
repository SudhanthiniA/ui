import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderverificationComponent } from './vieworderverification.component';

describe('VieworderverificationComponent', () => {
  let component: VieworderverificationComponent;
  let fixture: ComponentFixture<VieworderverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
