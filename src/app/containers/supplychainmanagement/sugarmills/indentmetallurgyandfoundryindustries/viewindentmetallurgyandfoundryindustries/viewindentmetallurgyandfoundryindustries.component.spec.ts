import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindentmetallurgyandfoundryindustriesComponent } from './viewindentmetallurgyandfoundryindustries.component';

describe('ViewindentmetallurgyandfoundryindustriesComponent', () => {
  let component: ViewindentmetallurgyandfoundryindustriesComponent;
  let fixture: ComponentFixture<ViewindentmetallurgyandfoundryindustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindentmetallurgyandfoundryindustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindentmetallurgyandfoundryindustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
