import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewethanolindentComponent } from './viewethanolindent.component';

describe('ViewethanolindentComponent', () => {
  let component: ViewethanolindentComponent;
  let fixture: ComponentFixture<ViewethanolindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewethanolindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewethanolindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
