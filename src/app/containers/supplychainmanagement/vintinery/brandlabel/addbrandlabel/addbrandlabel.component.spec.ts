import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbrandlabelComponent } from './addbrandlabel.component';

describe('AddbrandlabelComponent', () => {
  let component: AddbrandlabelComponent;
  let fixture: ComponentFixture<AddbrandlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbrandlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbrandlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
