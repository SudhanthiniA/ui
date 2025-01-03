import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplabelregistrationComponent } from './implabelregistration.component';

describe('ImplabelregistrationComponent', () => {
  let component: ImplabelregistrationComponent;
  let fixture: ComponentFixture<ImplabelregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplabelregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplabelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
