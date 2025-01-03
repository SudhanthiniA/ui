import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplereceiptackComponent } from './samplereceiptack.component';

describe('SamplereceiptackComponent', () => {
  let component: SamplereceiptackComponent;
  let fixture: ComponentFixture<SamplereceiptackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplereceiptackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplereceiptackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
