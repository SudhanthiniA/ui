import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddipComponent } from './adddip.component';

describe('AdddipComponent', () => {
  let component: AdddipComponent;
  let fixture: ComponentFixture<AdddipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
