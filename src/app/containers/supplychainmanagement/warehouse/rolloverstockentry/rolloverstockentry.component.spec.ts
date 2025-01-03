import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolloverstockentryComponent } from './rolloverstockentry.component';

describe('RolloverstockentryComponent', () => {
  let component: RolloverstockentryComponent;
  let fixture: ComponentFixture<RolloverstockentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolloverstockentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolloverstockentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
