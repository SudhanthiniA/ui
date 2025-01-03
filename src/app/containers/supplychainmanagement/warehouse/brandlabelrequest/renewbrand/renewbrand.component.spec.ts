import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewbrandComponent } from './renewbrand.component';

describe('RenewbrandComponent', () => {
  let component: RenewbrandComponent;
  let fixture: ComponentFixture<RenewbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
