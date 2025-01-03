import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddrafttpComponent } from './adddrafttp.component';

describe('AdddrafttpComponent', () => {
  let component: AdddrafttpComponent;
  let fixture: ComponentFixture<AdddrafttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddrafttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddrafttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
