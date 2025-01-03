import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendingproducationapplicationComponent } from './blendingproducationapplication.component';

describe('BlendingproducationapplicationComponent', () => {
  let component: BlendingproducationapplicationComponent;
  let fixture: ComponentFixture<BlendingproducationapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendingproducationapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendingproducationapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
