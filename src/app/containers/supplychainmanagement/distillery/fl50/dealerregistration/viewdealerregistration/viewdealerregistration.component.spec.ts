import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdealerregistrationComponent } from './viewdealerregistration.component';

describe('ViewdealerregistrationComponent', () => {
  let component: ViewdealerregistrationComponent;
  let fixture: ComponentFixture<ViewdealerregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdealerregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdealerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
