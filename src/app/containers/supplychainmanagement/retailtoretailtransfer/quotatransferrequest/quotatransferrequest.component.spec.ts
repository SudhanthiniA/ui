import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotatransferrequestComponent } from './quotatransferrequest.component';

describe('QuotatransferrequestComponent', () => {
  let component: QuotatransferrequestComponent;
  let fixture: ComponentFixture<QuotatransferrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotatransferrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotatransferrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
