import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutupdistlabelregComponent } from './outupdistlabelreg.component';

describe('OutupdistlabelregComponent', () => {
  let component: OutupdistlabelregComponent;
  let fixture: ComponentFixture<OutupdistlabelregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutupdistlabelregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutupdistlabelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
