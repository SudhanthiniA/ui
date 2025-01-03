import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlinglinemaintenanceComponent } from './bottlinglinemaintenance.component';

describe('BottlinglinemaintenanceComponent', () => {
  let component: BottlinglinemaintenanceComponent;
  let fixture: ComponentFixture<BottlinglinemaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlinglinemaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlinglinemaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
