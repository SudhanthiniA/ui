import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationtypeComponent } from './applicationtype.component';

describe('ApplicationtypeComponent', () => {
  let component: ApplicationtypeComponent;
  let fixture: ComponentFixture<ApplicationtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
