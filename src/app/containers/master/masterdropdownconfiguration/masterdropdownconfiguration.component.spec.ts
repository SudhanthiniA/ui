import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdropdownconfigurationComponent } from './masterdropdownconfiguration.component';

describe('MasterdropdownconfigurationComponent', () => {
  let component: MasterdropdownconfigurationComponent;
  let fixture: ComponentFixture<MasterdropdownconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdropdownconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdropdownconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
