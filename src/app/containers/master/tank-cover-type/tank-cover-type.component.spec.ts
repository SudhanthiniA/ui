import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankCoverTypeComponent } from './tank-cover-type.component';

describe('TankCoverTypeComponent', () => {
  let component: TankCoverTypeComponent;
  let fixture: ComponentFixture<TankCoverTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankCoverTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankCoverTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
