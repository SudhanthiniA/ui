import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingplanpredeclerationComponent } from './addbottlingplanpredecleration.component';

describe('AddbottlingplanpredeclerationComponent', () => {
  let component: AddbottlingplanpredeclerationComponent;
  let fixture: ComponentFixture<AddbottlingplanpredeclerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingplanpredeclerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingplanpredeclerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
