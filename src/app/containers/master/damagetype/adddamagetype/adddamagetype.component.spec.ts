import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddamagetypeComponent } from './adddamagetype.component';

describe('AdddamagetypeComponent', () => {
  let component: AdddamagetypeComponent;
  let fixture: ComponentFixture<AdddamagetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddamagetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddamagetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
