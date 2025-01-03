import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingfeesregisterComponent } from './addbottlingfeesregister.component';

describe('AddbottlingfeesregisterComponent', () => {
  let component: AddbottlingfeesregisterComponent;
  let fixture: ComponentFixture<AddbottlingfeesregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingfeesregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingfeesregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
