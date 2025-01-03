import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditstatusComponent } from './addeditstatus.component';

describe('AddeditstatusComponent', () => {
  let component: AddeditstatusComponent;
  let fixture: ComponentFixture<AddeditstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
