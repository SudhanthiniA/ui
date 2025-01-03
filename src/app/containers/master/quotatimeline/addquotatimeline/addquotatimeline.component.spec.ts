import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquotatimelineComponent } from './addquotatimeline.component';

describe('AddquotatimelineComponent', () => {
  let component: AddquotatimelineComponent;
  let fixture: ComponentFixture<AddquotatimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddquotatimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquotatimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
