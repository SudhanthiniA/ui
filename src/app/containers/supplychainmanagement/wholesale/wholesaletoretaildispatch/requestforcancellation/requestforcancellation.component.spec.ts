import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestforcancellationComponent } from './requestforcancellation.component';

describe('RequestforcancellationComponent', () => {
  let component: RequestforcancellationComponent;
  let fixture: ComponentFixture<RequestforcancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestforcancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestforcancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
