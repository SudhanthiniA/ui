import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpcancellationrequestComponent } from './tpcancellationrequest.component';

describe('TpcancellationrequestComponent', () => {
  let component: TpcancellationrequestComponent;
  let fixture: ComponentFixture<TpcancellationrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpcancellationrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpcancellationrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
