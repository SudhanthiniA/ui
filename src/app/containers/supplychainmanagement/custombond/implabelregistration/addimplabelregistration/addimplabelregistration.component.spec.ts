import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimplabelregistrationComponent } from './addimplabelregistration.component';

describe('AddimplabelregistrationComponent', () => {
  let component: AddimplabelregistrationComponent;
  let fixture: ComponentFixture<AddimplabelregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimplabelregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimplabelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
