import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindentrequestComponent } from './viewindentrequest.component';

describe('ViewindentrequestComponent', () => {
  let component: ViewindentrequestComponent;
  let fixture: ComponentFixture<ViewindentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
