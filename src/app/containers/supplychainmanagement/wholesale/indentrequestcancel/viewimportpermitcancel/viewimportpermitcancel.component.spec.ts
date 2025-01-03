import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimportpermitcancelComponent } from './viewimportpermitcancel.component';

describe('ViewimportpermitcancelComponent', () => {
  let component: ViewimportpermitcancelComponent;
  let fixture: ComponentFixture<ViewimportpermitcancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimportpermitcancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimportpermitcancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
