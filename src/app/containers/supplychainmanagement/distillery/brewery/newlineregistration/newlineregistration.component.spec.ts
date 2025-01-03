import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlineregistrationComponent } from './newlineregistration.component';

describe('NewlineregistrationComponent', () => {
  let component: NewlineregistrationComponent;
  let fixture: ComponentFixture<NewlineregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlineregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlineregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
