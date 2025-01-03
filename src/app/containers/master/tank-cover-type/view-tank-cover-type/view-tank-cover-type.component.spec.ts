import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTankCoverTypeComponent } from './view-tank-cover-type.component';

describe('ViewTankCoverTypeComponent', () => {
  let component: ViewTankCoverTypeComponent;
  let fixture: ComponentFixture<ViewTankCoverTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTankCoverTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTankCoverTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
