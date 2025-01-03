import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpasscancellationComponent } from './addpasscancellation.component';

describe('AddpasscancellationComponent', () => {
  let component: AddpasscancellationComponent;
  let fixture: ComponentFixture<AddpasscancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpasscancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpasscancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
