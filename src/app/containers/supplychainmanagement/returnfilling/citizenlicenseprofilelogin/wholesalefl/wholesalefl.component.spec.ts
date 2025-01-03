import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleflComponent } from './wholesalefl.component';

describe('WholesaleflComponent', () => {
  let component: WholesaleflComponent;
  let fixture: ComponentFixture<WholesaleflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesaleflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesaleflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
