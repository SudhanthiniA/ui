import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbrandlabelregwsComponent } from './addbrandlabelregws.component';

describe('AddbrandlabelregwsComponent', () => {
  let component: AddbrandlabelregwsComponent;
  let fixture: ComponentFixture<AddbrandlabelregwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbrandlabelregwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbrandlabelregwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
