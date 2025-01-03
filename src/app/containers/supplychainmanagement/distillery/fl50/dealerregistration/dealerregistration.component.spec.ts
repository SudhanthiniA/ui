import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerregistrationComponent } from './dealerregistration.component';

describe('DealerregistrationComponent', () => {
  let component: DealerregistrationComponent;
  let fixture: ComponentFixture<DealerregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
