import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindentforclosureComponent } from './viewindentforclosure.component';

describe('ViewindentforclosureComponent', () => {
  let component: ViewindentforclosureComponent;
  let fixture: ComponentFixture<ViewindentforclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindentforclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindentforclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
