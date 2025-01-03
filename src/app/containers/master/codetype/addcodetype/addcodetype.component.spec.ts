import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcodetypeComponent } from './addcodetype.component';

describe('AddcodetypeComponent', () => {
  let component: AddcodetypeComponent;
  let fixture: ComponentFixture<AddcodetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcodetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcodetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
