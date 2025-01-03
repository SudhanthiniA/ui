import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveviewprofileComponent } from './executiveviewprofile.component';

describe('ExecutiveviewprofileComponent', () => {
  let component: ExecutiveviewprofileComponent;
  let fixture: ComponentFixture<ExecutiveviewprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveviewprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
