import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteruserexceptadvdutyComponent } from './registeruserexceptadvduty.component';

describe('RegisteruserexceptadvdutyComponent', () => {
  let component: RegisteruserexceptadvdutyComponent;
  let fixture: ComponentFixture<RegisteruserexceptadvdutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteruserexceptadvdutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteruserexceptadvdutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
