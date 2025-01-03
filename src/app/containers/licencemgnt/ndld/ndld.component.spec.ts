import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdldComponent } from './ndld.component';

describe('NdldComponent', () => {
  let component: NdldComponent;
  let fixture: ComponentFixture<NdldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
