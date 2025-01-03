import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationofsmsmailalertComponent } from './configurationofsmsmailalert.component';

describe('ConfigurationofsmsmailalertComponent', () => {
  let component: ConfigurationofsmsmailalertComponent;
  let fixture: ComponentFixture<ConfigurationofsmsmailalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationofsmsmailalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationofsmsmailalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
