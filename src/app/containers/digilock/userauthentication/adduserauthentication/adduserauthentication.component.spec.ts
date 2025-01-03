import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserauthenticationComponent } from './adduserauthentication.component';

describe('AdduserauthenticationComponent', () => {
  let component: AdduserauthenticationComponent;
  let fixture: ComponentFixture<AdduserauthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserauthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
