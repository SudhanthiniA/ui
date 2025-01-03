import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencymasterComponent } from './frequencymaster.component';

describe('FrequencymasterComponent', () => {
  let component: FrequencymasterComponent;
  let fixture: ComponentFixture<FrequencymasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencymasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
