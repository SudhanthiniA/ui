import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdpregistrationComponent } from './edpregistration.component';

describe('EdpregistrationComponent', () => {
  let component: EdpregistrationComponent;
  let fixture: ComponentFixture<EdpregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdpregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdpregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
