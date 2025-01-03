import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspiritpermitforecloseComponent } from './viewspiritpermitforeclose.component';

describe('ViewspiritpermitforecloseComponent', () => {
  let component: ViewspiritpermitforecloseComponent;
  let fixture: ComponentFixture<ViewspiritpermitforecloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspiritpermitforecloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspiritpermitforecloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
