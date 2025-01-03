import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapprovaldeoComponent } from './viewapprovaldeo.component';

describe('ViewapprovaldeoComponent', () => {
  let component: ViewapprovaldeoComponent;
  let fixture: ComponentFixture<ViewapprovaldeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewapprovaldeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapprovaldeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
