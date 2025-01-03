import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfl25BComponent } from './formfl25-b.component';

describe('Formfl25BComponent', () => {
  let component: Formfl25BComponent;
  let fixture: ComponentFixture<Formfl25BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formfl25BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formfl25BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
