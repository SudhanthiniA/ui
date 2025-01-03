import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddindentrequestnewComponent } from './addindentrequestnew.component';

describe('AddindentrequestnewComponent', () => {
  let component: AddindentrequestnewComponent;
  let fixture: ComponentFixture<AddindentrequestnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddindentrequestnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddindentrequestnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
