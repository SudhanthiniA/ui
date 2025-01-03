import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewimportpermitComponent } from './viewimportpermit.component';

describe('ViewimportpermitComponent', () => {
  let component: ViewimportpermitComponent;
  let fixture: ComponentFixture<ViewimportpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewimportpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewimportpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
