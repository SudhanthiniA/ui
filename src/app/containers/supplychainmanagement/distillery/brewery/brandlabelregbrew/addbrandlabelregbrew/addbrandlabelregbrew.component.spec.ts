import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbrandlabelregbrewComponent } from './addbrandlabelregbrew.component';

describe('AddbrandlabelregbrewComponent', () => {
  let component: AddbrandlabelregbrewComponent;
  let fixture: ComponentFixture<AddbrandlabelregbrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbrandlabelregbrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbrandlabelregbrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
