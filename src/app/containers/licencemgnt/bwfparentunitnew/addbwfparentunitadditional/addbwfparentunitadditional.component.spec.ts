import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbwfparentunitadditionalComponent } from './addbwfparentunitadditional.component';

describe('AddbwfparentunitadditionalComponent', () => {
  let component: AddbwfparentunitadditionalComponent;
  let fixture: ComponentFixture<AddbwfparentunitadditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbwfparentunitadditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbwfparentunitadditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
