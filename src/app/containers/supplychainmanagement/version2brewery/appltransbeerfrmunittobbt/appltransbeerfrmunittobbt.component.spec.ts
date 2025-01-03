import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppltransbeerfrmunittobbtComponent } from './appltransbeerfrmunittobbt.component';

describe('AppltransbeerfrmunittobbtComponent', () => {
  let component: AppltransbeerfrmunittobbtComponent;
  let fixture: ComponentFixture<AppltransbeerfrmunittobbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppltransbeerfrmunittobbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppltransbeerfrmunittobbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
