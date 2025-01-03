import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddescalatelevelComponent } from './addescalatelevel.component';

describe('AddescalatelevelComponent', () => {
  let component: AddescalatelevelComponent;
  let fixture: ComponentFixture<AddescalatelevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddescalatelevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddescalatelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
