import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditConsuptionComponent } from './addedit-consuption.component';

describe('AddeditConsuptionComponent', () => {
  let component: AddeditConsuptionComponent;
  let fixture: ComponentFixture<AddeditConsuptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditConsuptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditConsuptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
