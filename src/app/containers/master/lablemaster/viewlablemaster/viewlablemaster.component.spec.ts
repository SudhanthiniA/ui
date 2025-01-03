import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlablemasterComponent } from './viewlablemaster.component';

describe('ViewlablemasterComponent', () => {
  let component: ViewlablemasterComponent;
  let fixture: ComponentFixture<ViewlablemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlablemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlablemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
