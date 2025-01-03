import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddliquorsubtypeComponent } from './addliquorsubtype.component';

describe('AddliquorsubtypeComponent', () => {
  let component: AddliquorsubtypeComponent;
  let fixture: ComponentFixture<AddliquorsubtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddliquorsubtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddliquorsubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
