import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimplabelregistrationComponent } from './viewimplabelregistration.component';

describe('ViewimplabelregistrationComponent', () => {
  let component: ViewimplabelregistrationComponent;
  let fixture: ComponentFixture<ViewimplabelregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimplabelregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimplabelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
