import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimportpermitstatusComponent } from './viewimportpermitstatus.component';

describe('ViewimportpermitstatusComponent', () => {
  let component: ViewimportpermitstatusComponent;
  let fixture: ComponentFixture<ViewimportpermitstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimportpermitstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimportpermitstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
