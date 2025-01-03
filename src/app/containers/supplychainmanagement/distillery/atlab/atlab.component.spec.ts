import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlabComponent } from './atlab.component';

describe('AtlabComponent', () => {
  let component: AtlabComponent;
  let fixture: ComponentFixture<AtlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
