import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrawmaterialComponent } from './viewrawmaterial.component';

describe('ViewrawmaterialComponent', () => {
  let component: ViewrawmaterialComponent;
  let fixture: ComponentFixture<ViewrawmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrawmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrawmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
