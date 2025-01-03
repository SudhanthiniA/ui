import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutupdistbrandregComponent } from './outupdistbrandreg.component';

describe('OutupdistbrandregComponent', () => {
  let component: OutupdistbrandregComponent;
  let fixture: ComponentFixture<OutupdistbrandregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutupdistbrandregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutupdistbrandregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
