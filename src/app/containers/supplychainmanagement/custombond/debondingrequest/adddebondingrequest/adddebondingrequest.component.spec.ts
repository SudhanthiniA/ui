import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddebondingrequestComponent } from './adddebondingrequest.component';

describe('AdddebondingrequestComponent', () => {
  let component: AdddebondingrequestComponent;
  let fixture: ComponentFixture<AdddebondingrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddebondingrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddebondingrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
