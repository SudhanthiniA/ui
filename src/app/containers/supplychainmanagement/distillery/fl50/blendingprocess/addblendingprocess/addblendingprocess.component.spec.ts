import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblendingprocessComponent } from './addblendingprocess.component';

describe('AddblendingprocessComponent', () => {
  let component: AddblendingprocessComponent;
  let fixture: ComponentFixture<AddblendingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddblendingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddblendingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
