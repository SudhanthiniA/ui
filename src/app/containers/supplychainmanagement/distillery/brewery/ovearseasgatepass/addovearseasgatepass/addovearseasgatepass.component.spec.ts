import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddovearseasgatepassComponent } from './addovearseasgatepass.component';

describe('AddovearseasgatepassComponent', () => {
  let component: AddovearseasgatepassComponent;
  let fixture: ComponentFixture<AddovearseasgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddovearseasgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddovearseasgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
