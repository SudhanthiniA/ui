import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaulkComponent } from './view-taulk.component';

describe('ViewTaulkComponent', () => {
  let component: ViewTaulkComponent;
  let fixture: ComponentFixture<ViewTaulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
