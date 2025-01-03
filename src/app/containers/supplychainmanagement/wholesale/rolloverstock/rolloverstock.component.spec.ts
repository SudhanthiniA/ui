import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolloverstockComponent } from './rolloverstock.component';

describe('RolloverstockComponent', () => {
  let component: RolloverstockComponent;
  let fixture: ComponentFixture<RolloverstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolloverstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolloverstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
