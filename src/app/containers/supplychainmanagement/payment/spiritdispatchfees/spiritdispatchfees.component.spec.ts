import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritdispatchfeesComponent } from './spiritdispatchfees.component';

describe('SpiritdispatchfeesComponent', () => {
  let component: SpiritdispatchfeesComponent;
  let fixture: ComponentFixture<SpiritdispatchfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritdispatchfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritdispatchfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
