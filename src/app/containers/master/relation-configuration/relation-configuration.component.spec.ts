import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationConfigurationComponent } from './relation-configuration.component';

describe('RelationConfigurationComponent', () => {
  let component: RelationConfigurationComponent;
  let fixture: ComponentFixture<RelationConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
