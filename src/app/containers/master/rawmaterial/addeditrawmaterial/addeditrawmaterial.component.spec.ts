import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditrawmaterialComponent } from './addeditrawmaterial.component';

describe('AddeditrawmaterialComponent', () => {
  let component: AddeditrawmaterialComponent;
  let fixture: ComponentFixture<AddeditrawmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditrawmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditrawmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
