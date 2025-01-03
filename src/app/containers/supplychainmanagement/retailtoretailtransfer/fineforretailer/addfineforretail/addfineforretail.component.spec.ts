import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfineforretailComponent } from './addfineforretail.component';

describe('AddfineforretailComponent', () => {
  let component: AddfineforretailComponent;
  let fixture: ComponentFixture<AddfineforretailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfineforretailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfineforretailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
