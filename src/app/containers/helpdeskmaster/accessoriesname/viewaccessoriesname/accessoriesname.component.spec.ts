import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccessoriesnameComponent } from './accessoriesname.component';

describe('ViewaccessoriesnameComponent', () => {
  let component: ViewaccessoriesnameComponent;
  let fixture: ComponentFixture<ViewaccessoriesnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaccessoriesnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccessoriesnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
