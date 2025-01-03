import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideodatabackupComponent } from './videodatabackup.component';

describe('VideodatabackupComponent', () => {
  let component: VideodatabackupComponent;
  let fixture: ComponentFixture<VideodatabackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideodatabackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideodatabackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
