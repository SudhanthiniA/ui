import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataupdatedComponent } from './dataupdated.component';

describe('DataupdatedComponent', () => {
  let component: DataupdatedComponent;
  let fixture: ComponentFixture<DataupdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataupdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataupdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
