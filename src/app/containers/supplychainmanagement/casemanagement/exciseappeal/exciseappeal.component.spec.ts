import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExciseappealComponent } from './exciseappeal.component';

describe('ExciseappealComponent', () => {
  let component: ExciseappealComponent;
  let fixture: ComponentFixture<ExciseappealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExciseappealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExciseappealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
