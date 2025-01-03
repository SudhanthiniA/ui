import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewblendingproducationapplicationComponent } from './viewblendingproducationapplication.component';

describe('ViewblendingproducationapplicationComponent', () => {
  let component: ViewblendingproducationapplicationComponent;
  let fixture: ComponentFixture<ViewblendingproducationapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewblendingproducationapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewblendingproducationapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
