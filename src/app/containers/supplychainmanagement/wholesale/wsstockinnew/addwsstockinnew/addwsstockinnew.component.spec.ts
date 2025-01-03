import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwsstockinnewComponent } from './addwsstockinnew.component';

describe('AddwsstockinnewComponent', () => {
  let component: AddwsstockinnewComponent;
  let fixture: ComponentFixture<AddwsstockinnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwsstockinnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwsstockinnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
