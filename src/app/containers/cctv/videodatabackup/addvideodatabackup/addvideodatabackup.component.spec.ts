import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvideodatabackupComponent } from './addvideodatabackup.component';

describe('AddvideodatabackupComponent', () => {
  let component: AddvideodatabackupComponent;
  let fixture: ComponentFixture<AddvideodatabackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvideodatabackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvideodatabackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
