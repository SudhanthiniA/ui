import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertnewComponent } from './alertnew.component';

describe('AlertnewComponent', () => {
  let component: AlertnewComponent;
  let fixture: ComponentFixture<AlertnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
