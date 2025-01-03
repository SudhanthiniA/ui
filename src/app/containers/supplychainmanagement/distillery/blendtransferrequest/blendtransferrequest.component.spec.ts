import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendtransferrequestComponent } from './blendtransferrequest.component';

describe('BlendtransferrequestComponent', () => {
  let component: BlendtransferrequestComponent;
  let fixture: ComponentFixture<BlendtransferrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendtransferrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendtransferrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
