import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClmgqachievementComponent } from './clmgqachievement.component';

describe('ClmgqachievementComponent', () => {
  let component: ClmgqachievementComponent;
  let fixture: ComponentFixture<ClmgqachievementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClmgqachievementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClmgqachievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
