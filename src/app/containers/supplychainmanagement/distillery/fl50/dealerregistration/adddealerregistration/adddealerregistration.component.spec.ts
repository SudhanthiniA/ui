import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddealerregistrationComponent } from './adddealerregistration.component';

describe('AdddealerregistrationComponent', () => {
  let component: AdddealerregistrationComponent;
  let fixture: ComponentFixture<AdddealerregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddealerregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddealerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
