import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addbio1aComponent } from './addbio1a.component'

describe('Addbio1aComponent', () => {
  let component: Addbio1aComponent;
  let fixture: ComponentFixture<Addbio1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addbio1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addbio1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
