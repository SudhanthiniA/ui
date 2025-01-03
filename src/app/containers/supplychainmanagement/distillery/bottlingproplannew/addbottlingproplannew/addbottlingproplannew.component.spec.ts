import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbottlingproplannewComponent } from './addbottlingproplannew.component';

describe('AddbottlingproplannewComponent', () => {
  let component: AddbottlingproplannewComponent;
  let fixture: ComponentFixture<AddbottlingproplannewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbottlingproplannewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbottlingproplannewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
