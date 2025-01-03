import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationforreleaseofsheeranidhiComponent } from './applicationforreleaseofsheeranidhi.component';

describe('ApplicationforreleaseofsheeranidhiComponent', () => {
  let component: ApplicationforreleaseofsheeranidhiComponent;
  let fixture: ComponentFixture<ApplicationforreleaseofsheeranidhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationforreleaseofsheeranidhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationforreleaseofsheeranidhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
