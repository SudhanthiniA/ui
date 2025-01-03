import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewusersettingsComponent } from './viewusersettings.component';

describe('ViewusersettingsComponent', () => {
  let component: ViewusersettingsComponent;
  let fixture: ComponentFixture<ViewusersettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewusersettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewusersettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
