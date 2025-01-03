import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfl25AComponent } from './formfl25-a.component';

describe('Formfl25AComponent', () => {
  let component: Formfl25AComponent;
  let fixture: ComponentFixture<Formfl25AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formfl25AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formfl25AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
