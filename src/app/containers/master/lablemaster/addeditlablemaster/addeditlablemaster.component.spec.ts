import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditlablemasterComponent } from './addeditlablemaster.component';

describe('AddeditlablemasterComponent', () => {
  let component: AddeditlablemasterComponent;
  let fixture: ComponentFixture<AddeditlablemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditlablemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditlablemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
