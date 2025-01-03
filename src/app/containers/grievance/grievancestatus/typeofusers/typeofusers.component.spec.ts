import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeofusersComponent } from './typeofusers.component';

describe('TypeofusersComponent', () => {
  let component: TypeofusersComponent;
  let fixture: ComponentFixture<TypeofusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeofusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeofusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
