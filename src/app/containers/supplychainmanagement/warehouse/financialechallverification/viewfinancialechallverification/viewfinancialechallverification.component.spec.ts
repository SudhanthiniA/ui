import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfinancialechallverificationComponent } from './viewfinancialechallverification.component';

describe('ViewfinancialechallverificationComponent', () => {
  let component: ViewfinancialechallverificationComponent;
  let fixture: ComponentFixture<ViewfinancialechallverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfinancialechallverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfinancialechallverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
