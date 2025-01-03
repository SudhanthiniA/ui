import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingprocessComponent } from './addbottlingprocess.component';

describe('AddbottlingprocessComponent', () => {
  let component: AddbottlingprocessComponent;
  let fixture: ComponentFixture<AddbottlingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
