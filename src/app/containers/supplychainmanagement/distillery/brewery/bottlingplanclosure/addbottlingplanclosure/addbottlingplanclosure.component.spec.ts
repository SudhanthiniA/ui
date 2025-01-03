import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingplanclosureComponent } from './addbottlingplanclosure.component';

describe('AddbottlingplanclosureComponent', () => {
  let component: AddbottlingplanclosureComponent;
  let fixture: ComponentFixture<AddbottlingplanclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingplanclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingplanclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
