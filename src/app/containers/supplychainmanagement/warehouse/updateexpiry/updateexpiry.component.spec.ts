import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateexpiryComponent } from './updateexpiry.component';

describe('UpdateexpiryComponent', () => {
  let component: UpdateexpiryComponent;
  let fixture: ComponentFixture<UpdateexpiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateexpiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateexpiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
