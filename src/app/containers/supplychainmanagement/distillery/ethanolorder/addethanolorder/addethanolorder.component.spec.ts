import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddethanolorderComponent } from './addethanolorder.component';

describe('AddethanolorderComponent', () => {
  let component: AddethanolorderComponent;
  let fixture: ComponentFixture<AddethanolorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddethanolorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddethanolorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
