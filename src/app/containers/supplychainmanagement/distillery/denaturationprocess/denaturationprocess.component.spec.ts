import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenaturationprocessComponent } from './denaturationprocess.component';

describe('DenaturationprocessComponent', () => {
  let component: DenaturationprocessComponent;
  let fixture: ComponentFixture<DenaturationprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenaturationprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenaturationprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
