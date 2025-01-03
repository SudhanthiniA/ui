import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonmasterComponent } from './buttonmaster.component';

describe('ButtonmasterComponent', () => {
  let component: ButtonmasterComponent;
  let fixture: ComponentFixture<ButtonmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
