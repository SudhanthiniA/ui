import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbrandlabelregComponent } from './addbrandlabelreg.component';

describe('AddbrandlabelregComponent', () => {
  let component: AddbrandlabelregComponent;
  let fixture: ComponentFixture<AddbrandlabelregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbrandlabelregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbrandlabelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
