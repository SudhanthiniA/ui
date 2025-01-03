import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitydashboardComponent } from './entitydashboard.component';

describe('EntitydashboardComponent', () => {
  let component: EntitydashboardComponent;
  let fixture: ComponentFixture<EntitydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
