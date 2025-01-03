import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbrandhistoryComponent } from './viewbrandhistory.component';

describe('ViewbrandhistoryComponent', () => {
  let component: ViewbrandhistoryComponent;
  let fixture: ComponentFixture<ViewbrandhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbrandhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbrandhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
