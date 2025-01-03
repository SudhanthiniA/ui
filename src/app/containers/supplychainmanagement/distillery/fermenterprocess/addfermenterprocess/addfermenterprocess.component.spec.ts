import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfermenterprocessComponent } from './addfermenterprocess.component';

describe('AddfermenterprocessComponent', () => {
  let component: AddfermenterprocessComponent;
  let fixture: ComponentFixture<AddfermenterprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfermenterprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfermenterprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
