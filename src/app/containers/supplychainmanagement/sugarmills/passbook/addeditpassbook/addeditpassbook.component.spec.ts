import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditpassbookComponent } from './addeditpassbook.component';

describe('AddeditpassbookComponent', () => {
  let component: AddeditpassbookComponent;
  let fixture: ComponentFixture<AddeditpassbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditpassbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditpassbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
