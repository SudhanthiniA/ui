import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserauthenticationComponent } from './userauthentication.component';

describe('UserauthenticationComponent', () => {
  let component: UserauthenticationComponent;
  let fixture: ComponentFixture<UserauthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserauthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
