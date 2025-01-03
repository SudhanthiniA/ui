import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd21FormComponent } from './pd21-form.component';

describe('Pd21FormComponent', () => {
  let component: Pd21FormComponent;
  let fixture: ComponentFixture<Pd21FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd21FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd21FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
