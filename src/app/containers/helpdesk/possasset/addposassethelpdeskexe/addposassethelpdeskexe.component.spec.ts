import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddposassethelpdeskexeComponent } from './addposassethelpdeskexe.component';

describe('AddposassethelpdeskexeComponent', () => {
  let component: AddposassethelpdeskexeComponent;
  let fixture: ComponentFixture<AddposassethelpdeskexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddposassethelpdeskexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddposassethelpdeskexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
