import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockinbreweryComponent } from './viewstockinbrewery.component';

describe('ViewstockinbreweryComponent', () => {
  let component: ViewstockinbreweryComponent;
  let fixture: ComponentFixture<ViewstockinbreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockinbreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockinbreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
