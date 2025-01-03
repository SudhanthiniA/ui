import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockinComponent } from './viewstockin.component';

describe('ViewstockinComponent', () => {
  let component: ViewstockinComponent;
  let fixture: ComponentFixture<ViewstockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
