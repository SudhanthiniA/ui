import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddispatchtodealerComponent } from './adddispatchtodealer.component';

describe('AdddispatchtodealerComponent', () => {
  let component: AdddispatchtodealerComponent;
  let fixture: ComponentFixture<AdddispatchtodealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddispatchtodealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddispatchtodealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
