import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingplanComponent } from './addbottlingplan.component';

describe('AddbottlingplanComponent', () => {
  let component: AddbottlingplanComponent;
  let fixture: ComponentFixture<AddbottlingplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
