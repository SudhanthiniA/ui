import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreturnassetComponent } from './viewreturnasset.component';

describe('ViewreturnassetComponent', () => {
  let component: ViewreturnassetComponent;
  let fixture: ComponentFixture<ViewreturnassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreturnassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreturnassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
