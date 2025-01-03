import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditLiquorComponent } from './addedit-liquor.component';

describe('AddeditLiquorComponent', () => {
  let component: AddeditLiquorComponent;
  let fixture: ComponentFixture<AddeditLiquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditLiquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditLiquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
