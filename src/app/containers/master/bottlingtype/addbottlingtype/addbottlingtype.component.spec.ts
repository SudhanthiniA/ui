import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingtypeComponent } from './addbottlingtype.component';

describe('AddbottlingtypeComponent', () => {
  let component: AddbottlingtypeComponent;
  let fixture: ComponentFixture<AddbottlingtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
