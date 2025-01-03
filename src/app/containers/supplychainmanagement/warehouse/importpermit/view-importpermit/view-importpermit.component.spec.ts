import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImportpermitComponent } from './view-importpermit.component';

describe('ViewImportpermitComponent', () => {
  let component: ViewImportpermitComponent;
  let fixture: ComponentFixture<ViewImportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewImportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewImportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
