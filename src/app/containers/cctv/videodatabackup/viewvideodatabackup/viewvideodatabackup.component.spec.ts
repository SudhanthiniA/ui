import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvideodatabackupComponent } from './viewvideodatabackup.component';

describe('ViewvideodatabackupComponent', () => {
  let component: ViewvideodatabackupComponent;
  let fixture: ComponentFixture<ViewvideodatabackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvideodatabackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvideodatabackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
