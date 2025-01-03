import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitevisitComponent } from './sitevisit.component';

describe('SitevisitComponent', () => {
  let component: SitevisitComponent;
  let fixture: ComponentFixture<SitevisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitevisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitevisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
