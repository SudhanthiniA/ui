import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialfeeComponent } from './specialfee.component';

describe('SpecialfeeComponent', () => {
  let component: SpecialfeeComponent;
  let fixture: ComponentFixture<SpecialfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
