import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveshmitradashboardComponent } from './niveshmitradashboard.component';

describe('NiveshmitradashboardComponent', () => {
  let component: NiveshmitradashboardComponent;
  let fixture: ComponentFixture<NiveshmitradashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveshmitradashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveshmitradashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
