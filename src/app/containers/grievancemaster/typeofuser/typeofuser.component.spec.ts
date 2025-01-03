import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeofuserComponent } from './typeofuser.component';

describe('TypeofuserComponent', () => {
  let component: TypeofuserComponent;
  let fixture: ComponentFixture<TypeofuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeofuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
