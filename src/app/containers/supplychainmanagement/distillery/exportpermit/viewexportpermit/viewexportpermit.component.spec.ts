import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexportpermitComponent } from './viewexportpermit.component';

describe('ViewexportpermitComponent', () => {
  let component: ViewexportpermitComponent;
  let fixture: ComponentFixture<ViewexportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
