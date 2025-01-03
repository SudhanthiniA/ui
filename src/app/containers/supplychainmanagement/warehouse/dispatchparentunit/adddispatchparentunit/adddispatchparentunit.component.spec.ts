import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddispatchparentunitComponent } from './adddispatchparentunit.component';

describe('AdddispatchparentunitComponent', () => {
  let component: AdddispatchparentunitComponent;
  let fixture: ComponentFixture<AdddispatchparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddispatchparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddispatchparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
