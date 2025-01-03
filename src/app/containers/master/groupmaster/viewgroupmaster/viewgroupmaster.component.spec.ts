import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgroupmasterComponent } from './viewgroupmaster.component';

describe('ViewgroupmasterComponent', () => {
  let component: ViewgroupmasterComponent;
  let fixture: ComponentFixture<ViewgroupmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgroupmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgroupmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
