import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankUsageComponent } from './tank-usage.component';

describe('TankUsageComponent', () => {
  let component: TankUsageComponent;
  let fixture: ComponentFixture<TankUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
