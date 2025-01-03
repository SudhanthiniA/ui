import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdComponent } from './omd.component'

describe('OmdComponent', () => {
  let component: OmdComponent;
  let fixture: ComponentFixture<OmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
