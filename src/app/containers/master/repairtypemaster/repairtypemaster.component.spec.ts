import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairtypemasterComponent } from './repairtypemaster.component';

describe('RepairtypemasterComponent', () => {
  let component: RepairtypemasterComponent;
  let fixture: ComponentFixture<RepairtypemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairtypemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairtypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
