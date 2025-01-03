import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditgenderComponent } from './addeditgender.component';

describe('AddeditgenderComponent', () => {
  let component: AddeditgenderComponent;
  let fixture: ComponentFixture<AddeditgenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditgenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditgenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
