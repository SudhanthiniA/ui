import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcestatusComponent } from './resourcestatus.component';

describe('ResourcestatusComponent', () => {
  let component: ResourcestatusComponent;
  let fixture: ComponentFixture<ResourcestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
