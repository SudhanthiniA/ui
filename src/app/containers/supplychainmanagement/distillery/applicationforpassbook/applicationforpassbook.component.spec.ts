import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationforpassbookComponent } from './applicationforpassbook.component';

describe('ApplicationforpassbookComponent', () => {
  let component: ApplicationforpassbookComponent;
  let fixture: ComponentFixture<ApplicationforpassbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationforpassbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationforpassbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
