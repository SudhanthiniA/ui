import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasuryrajkoshscrollComponent } from './treasuryrajkoshscroll.component';

describe('TreasuryrajkoshscrollComponent', () => {
  let component: TreasuryrajkoshscrollComponent;
  let fixture: ComponentFixture<TreasuryrajkoshscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasuryrajkoshscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasuryrajkoshscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
