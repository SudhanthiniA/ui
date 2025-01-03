import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconfigurationofsmsmailalertComponent } from './viewconfigurationofsmsmailalert.component';

describe('ViewconfigurationofsmsmailalertComponent', () => {
  let component: ViewconfigurationofsmsmailalertComponent;
  let fixture: ComponentFixture<ViewconfigurationofsmsmailalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewconfigurationofsmsmailalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconfigurationofsmsmailalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
