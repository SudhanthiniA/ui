import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotatimelineComponent } from './quotatimeline.component';

describe('QuotatimelineComponent', () => {
  let component: QuotatimelineComponent;
  let fixture: ComponentFixture<QuotatimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotatimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotatimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
