import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddispatchComponent } from './adddispatch.component';

describe('AdddispatchComponent', () => {
  let component: AdddispatchComponent;
  let fixture: ComponentFixture<AdddispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
