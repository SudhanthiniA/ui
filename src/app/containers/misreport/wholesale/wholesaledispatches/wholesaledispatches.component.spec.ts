import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaledispatchesComponent } from './wholesaledispatches.component';

describe('WholesaledispatchesComponent', () => {
  let component: WholesaledispatchesComponent;
  let fixture: ComponentFixture<WholesaledispatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesaledispatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesaledispatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
