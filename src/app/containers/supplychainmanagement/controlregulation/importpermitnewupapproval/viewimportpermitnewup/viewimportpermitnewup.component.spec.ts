import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimportpermitnewupComponent } from './viewimportpermitnewup.component';

describe('ViewimportpermitnewupComponent', () => {
  let component: ViewimportpermitnewupComponent;
  let fixture: ComponentFixture<ViewimportpermitnewupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimportpermitnewupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimportpermitnewupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
